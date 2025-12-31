(() => {
  // <stdin>
  (function() {
    document.addEventListener("DOMContentLoaded", () => {
      document.querySelectorAll("pre > code").forEach((codeBlock) => {
        const pre = codeBlock.parentNode;
        if (pre.querySelector(".copy-btn")) return;
        let wrapper = pre.parentNode;
        if (!wrapper.classList || !wrapper.classList.contains("code-block-wrapper")) {
          wrapper = document.createElement("div");
          wrapper.className = "code-block-wrapper";
          pre.parentNode.insertBefore(wrapper, pre);
          wrapper.appendChild(pre);
        }
        const button = document.createElement("button");
        button.className = "copy-btn";
        button.innerHTML = "Copy";
        button.addEventListener("click", () => {
          navigator.clipboard.writeText(codeBlock.textContent).then(() => {
            button.innerHTML = "Copied";
            setTimeout(() => {
              button.innerHTML = "Copy";
            }, 2e3);
          });
        });
        wrapper.style.position = "relative";
        wrapper.appendChild(button);
      });
    });
  })();
})();
