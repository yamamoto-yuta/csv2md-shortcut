export { }
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

const handleShortcuts = (e: KeyboardEvent) => {
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

            // alert("Set converted text on clipboard:\n\n" + convertedText);


            console.log(convertedText);
            navigator.clipboard.writeText(convertedText);
        };
    };
};
document.addEventListener("keydown", handleShortcuts);