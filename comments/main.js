const msgContainer = document.getElementById('msg-container');
const commentInput = document.getElementById('comment_input');

function addComment() {
    const text = commentInput.value;
    if(!text) {
        return;
    }

    let msg = {
        sender: "John Doe",
        text: text
    };
    const commentNode = createCommentNode(msg);
    msgContainer.appendChild(commentNode);
    commentInput.value = '';
    commentInput.focus();
}
function createCommentNode(msg) {
    const comment = document.createElement('div');
    comment.classList.add('message');
    comment.innerHTML = `
        <div class="img-container"></div>
        <div class="content">
            <span class="sender">${msg.sender}</span>
            <span class="text">${msg.text}</span>
        </div>`.trim();
    return comment;
}

function handleButtonKeyPress(e) {
    const keyEnterCode = 13;
    if (e.keyCode === keyEnterCode) {
        addComment();
    }
}

