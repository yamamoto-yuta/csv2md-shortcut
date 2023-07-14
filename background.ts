console.log("Background script loaded");

const execEvent = () => {
    console.log("Executing event");

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

    const createToast = (): HTMLDivElement => {
        const toast = document.createElement('div');
        toast.className = 'csv2md-toast';
        toast.style.display = 'flex';
        toast.style.position = 'fixed';
        toast.style.bottom = '20px';
        toast.style.left = '20px';
        toast.style.padding = '14px 20px';
        toast.style.fontSize = '16px';
        toast.style.fontFamily = 'sans-serif';
        toast.style.backgroundColor = '#28a746';
        toast.style.color = 'white';
        toast.style.borderRadius = '5px';
        toast.style.boxShadow = '0 4px 8px 0 rgba(0, 0, 0, .5)';
        toast.style.transition = 'opacity 1s';
        toast.style.zIndex = '9999';

        const toastIcon = document.createElement('div');
        toast.appendChild(toastIcon);
        toastIcon.className = 'csv2md-toast-icon'
        toastIcon.style.fontSize = '30px';
        toastIcon.style.margin = 'auto 16px auto 0';
        toastIcon.style.padding = '0';
        toastIcon.innerHTML = '&#10003;';

        const toastMessage = document.createElement('div');
        toast.appendChild(toastMessage);
        toastMessage.className = 'csv2md-toast-message';
        toastMessage.style.margin = 'auto 0';

        const toastMessageTitle = document.createElement('div');
        toastMessage.appendChild(toastMessageTitle);
        toastMessageTitle.className = 'csv2md-toast-message-title';
        toastMessageTitle.style.fontWeight = 'bold';
        toastMessageTitle.style.marginBottom = '4px';
        toastMessageTitle.innerHTML = 'Finish conversion!';

        const toastMessageContent = document.createElement('div');
        toastMessage.appendChild(toastMessageContent);
        toastMessageContent.className = 'csv2md-toast-message-content';
        toastMessageContent.innerHTML = '<span class="shortcut">Ctrl</span>/<span class="shortcut">Cmd</span>+<span class="shortcut">v</span> to paste converted text.';
        for (let _s of toastMessageContent.querySelectorAll('.shortcut')) {
            let shortcutSpan = _s as HTMLSpanElement;
            shortcutSpan.style.display = 'inline-block';
            shortcutSpan.style.padding = '2px 4px';
            shortcutSpan.style.margin = '0 2px';
            shortcutSpan.style.fontSize = '16px';
            shortcutSpan.style.fontFamily = 'Arial';
            shortcutSpan.style.lineHeight = '16px';
            shortcutSpan.style.color = '#333';
            shortcutSpan.style.backgroundColor = '#f7f7f7';
            shortcutSpan.style.border = '1px solid #ccc';
            shortcutSpan.style.borderRadius = '3px';
            shortcutSpan.style.boxShadow = '0 1px 0 rgba(0,0,0,.2), 0 1px 0 rgba(255,255,255,.1) inset';
        };

        return toast;
    };

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

        const toastElement = createToast();
        document.body.appendChild(toastElement);
        setTimeout(() => {
            toastElement.style.opacity = '0';
        }, 1000);
        setTimeout(() => {
            toastElement.remove();
        }, 2000);
    };
}

chrome.commands.onCommand.addListener((command, tab) => {
    console.log(command);
    if (!tab.url.includes('chrome://')) {
        chrome.scripting.executeScript({
            target: { tabId: tab.id },
            func: execEvent
        });
    }
});
