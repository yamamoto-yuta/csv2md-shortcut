import React, { useState, useEffect } from "react";

console.log("This is content script");

const convertCSVToMarkdownTable = (csv: string): string => {
    const lines = csv.split('\n');
    const markdownLines = lines.map((line) => '| ' + line.split(',').join(' | ') + ' |');
    const columnLength = markdownLines[0].split('|').length - 2;
    markdownLines.splice(1, 0, '|' + ' --- |'.repeat(columnLength - 1) + ' --- |');
    return markdownLines.join('\n');
};

const convertMarkdownTableToCSV = (markdown: string): string => {
    const lines = markdown.split('\n');
    // Remove the line with '---' separators
    lines.splice(1, 1);
    const csvLines = lines.map((line) => {
        // Remove leading and trailing pipe characters
        const trimmedLine = line.replace(/^\|/, '').replace(/\|$/, '');
        // Split the line into cells, trim each cell, then join them with commas
        return trimmedLine
            .split('|')
            .map((cell) => cell.trim())
            .join(', ');
    });
    return csvLines.join('\n');
};


function ToggleSpan() {
    const [isSpanVisible, setSpanVisible] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.ctrlKey && e.key === "j") {
                const currentElement = document.activeElement;
                if (currentElement.tagName === "TEXTAREA") {
                    const textArea = currentElement as HTMLTextAreaElement;
                    const textAreaValue = textArea.value;
                    const selectedStart = textArea.selectionStart;
                    const selectedEnd = textArea.selectionEnd;
                    const selectedText = textAreaValue.slice(selectedStart, selectedEnd);
                    console.log(selectedText);

                    const isCSV = selectedText.indexOf(',') > -1;
                    const isMarkdownTable = /\|[^|]+\|/g.test(selectedText);
                    let convertedText: string = "";
                    if (isCSV) {
                        convertedText = convertCSVToMarkdownTable(selectedText);
                    } else if (isMarkdownTable) {
                        convertedText = convertMarkdownTableToCSV(selectedText);
                    } else {
                        convertedText = "\n| col1 | col2 | col3 |\n| :--- | :--- | :--- |\n| | | |";
                    }
                    console.log(convertedText);

                    navigator.clipboard.writeText(convertedText);
                };
                setSpanVisible(true);
                setTimeout(() => {
                    setSpanVisible(false);
                }, 2000);
            }
        };

        window.addEventListener("keydown", handleKeyDown);

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    return (
        <div>
            {isSpanVisible ? <div
                style={{
                    position: 'fixed',
                    bottom: '30px',
                    left: '30px',
                    textAlign: 'left',
                    backgroundColor: 'white',
                    borderLeft: '10px solid green',
                    color: 'black',
                    padding: '10px 50px 10px 10px',
                    boxShadow: '5px 5px 5px darkgray',
                }}
            >
                <b>Finish conversion!</b><br />
                Ctrl + v to paste converted text.
            </div> : null}
        </div>
    );
}

export default ToggleSpan;
