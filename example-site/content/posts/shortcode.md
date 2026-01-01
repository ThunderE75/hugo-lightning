+++
title = "Shortcodes Showcase"
date = "2026-01-01"
tags = ["styling"]
featured = true
image = "This is visible in link preview"
description = 'This is visible in link preview'
+++

This page showcases shortcodes with consists majority of improvements from the original theme.

## LinkIcon
This website supports [Font Awesome v7.1](https://fontawesome.com/), so you can use this syntax to create links with icons.

```
{ {< linkIcon "url" "font-awesome icon-name" "Link text" >}}
```
Example: 
- {{< linkIcon "https://youtube.com" "fa-brands fa-youtube" "Link Text" >}}
- {{< linkicon "https://zsh.sourceforge.io/" "fa-solid fa-globe" "web">}}
- {{< linkicon "https://github.com/aristocratos/btop" "fa-brands fa-github" "Github/Repo">}}
- {{< linkicon "https://github.com/ThunderE75" "fa-solid fa-user" "Github/User" >}}
- {{< linkicon "https://github.com/ThunderE75" "fa-brands fa-google" "Google" >}}
- {{< linkicon "https://www.youtube.com/watch?v=dQw4w9WgXcQ" "fa-brands fa-youtube" "Youtube" >}}
- {{< linkicon "https://thundere75.github.io/" "fa-solid fa-blog" "Blog">}}

## Callout

These are notion styled callouts. with available parameter, a callout can be collapsible or not, Folded or unfolded, can have custom title, show & hide both icon and title.
the colors are based on the types of callout like info, warning, tip, etc.

```
{ {< callout 
    type="info" 
    title="Custom Title" 
    hideTitle=false 
    showIcon=false 
    foldable=true 
    collapsed=false 
>}}
    This callout has all the parameters, you can experiment.
{ {< /callout >}}
```

Example: {{< callout type="info" title="Custom Title" hideTitle=false showIcon=false foldable=true collapsed=false >}}
This callout has all the parameters, you can experiment.
{{< /callout >}}


> below is a list of all available types for callouts:

|                       Icon                        | Types of Callout | Color                                                                           |
| :-----------------------------------------------: | ---------------- | ------------------------------------------------------------------------------- |
|    <i class="fa-regular fa-sticky-note"> </i>     | Note             | <span style="color:#3b82f6; background: rgba(59,130,246,0.05);">#3b82f6</span>  |
|      <i class="fa-regular fa-file-alt"> </i>      | Abstract         | <span style="color:#6366f1; background: rgba(99,102,241,0.05);">#6366f1</span>  |
|     <i class="fa-solid fa-circle-info"> </i>      | Info             | <span style="color:#0ea5e9; background: rgba(14,165,233,0.05);">#0ea5e9</span>  |
|      <i class="fa-solid fa-lightbulb"> </i>       | Tip              | <span style="color:#a855f7; background: rgba(168,85,247,0.05);">#a855f7</span>  |
|     <i class="fa-solid fa-circle-check"> </i>     | Success          | <span style="color:#22c55e; background: rgba(34,197,94,0.05);">#22c55e</span>   |
|  <i class="fa-regular fa-circle-question"> </i>   | Question         | <span style="color:#14b8a6; background: rgba(20,184,166,0.05);">#14b8a6</span>  |
| <i class="fa-solid fa-triangle-exclamation"> </i> | Warning          | <span style="color:#f59e0b; background: rgba(245,158,11,0.05);">#f59e0b</span>  |
|     <i class="fa-solid fa-circle-xmark"> </i>     | Failure          | <span style="color:#ef4444; background: rgba(239,68,68,0.05);">#ef4444</span>   |
|   <i class="fa-solid fa-skull-crossbones"> </i>   | Danger           | <span style="color:#b91c1c; background: rgba(185,28,28,0.06);">#b91c1c</span>   |
|         <i class="fa-solid fa-bug"> </i>          | Bug              | <span style="color:#d946ef; background: rgba(217,70,239,0.06);">#d946ef</span>  |
|         <i class="fa-solid fa-code"> </i>         | Example          | <span style="color:#2563eb; background: rgba(37,99,235,0.05);">#2563eb</span>   |
|      <i class="fa-solid fa-quote-left"> </i>      | Quote            | <span style="color:#6b7280; background: rgba(107,114,128,0.05);">#6b7280</span> |
|     <i class="fa-solid fa-comment-dots"> </i>     | Opinion          | <span style="color:#e879f9; background: rgba(232,121,249,0.06);">#e879f9</span> |

--- 

## Jump to Button
This button is used to skip to the most important part of the a blog, like "jump to instructions" on a guide.

```
{ {< jumpto src="#installing-windows" label="Skip to Installation" >}}
```

{{< jumpto src="#end" label="Scroll to end" >}}

## Keyboard

used the kbd html tag

```
{ {< kbd "Tab ↹" >}}
```

sample:  {{< kbd "Tab ↹" >}}


|          Name | Icon          |
| ------------: | ------------- |
|       `⊞ Win` | Windows Icon  |
|      `Ctrl ⌃` | Control Key   |
|       `⌘ cmd` | Command Key   |
|     `Shift ⇧` | Shift Key     |
|       `Alt ⌥` | Alt Key       |
|    `⌥ Option` | Option Key    |
|       `Tab ↹` | Tab Key       |
| `Backspace ←` | Backspace Key |
|       `Del ⌫` | Delete Key    |
|        `🌐 fn` | Function Key  |
|         `Esc` | Escape Key    |



## Image

An image shortcode with caption, credit and url to original

```
{ {< img 
        src="image.png" 
        caption="This is a caption" 
        credit="Source" 
        creditURL="https://example.com" 
        alt = "Alternate text"
        width = 
        height =

>}}
```

{{< img src="https://photos.smugmug.com/Featured-galleries/Clarion-NSX/i-MTZc662/2/NFjw5hFSZSx77zbM3VcRLFCjP2GjcHRbH6jhcGZjH/X3/LARY1377-X3.jpg" 
    caption="1991 Acura NSX" 
    credit="Larry Chen" 
    creditURL="https://www.larrychenphoto.com/Featured-galleries/Clarion-NSX" >}}

## Code Highlight

This is a default hugo shortcode to highlight code snippets [DOCS](https://gohugo.io/shortcodes/highlight/)

> List of all highlight themes : https://gohugo.io/quick-reference/syntax-highlighting-styles/ 
> Recommended themes that goes well with lightning theme: 
>   - onedark
>   - vulcan
>   - xcode-dark
>   - doom-one
> 

```
{ {< highlight 
    LANG
    OPTION
>}}
======== CODE ========
{ {< /highlight >}}
```

{{< highlight java "style=onedark">}}
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode res = new ListNode(0, head);
        ListNode slow = res;
        ListNode fast = head;

        // making the distance fixed
        for (int i = 0; i < n; i++)
            fast = fast.next;
        
        while (fast != null) {
            fast = fast.next;
            slow = slow.next;
        }

        slow.next = slow.next.next;
        return res.next;
    }
}
{{< /highlight >}}

## Youtube Bookmark

A notion style video bookmark, it auto fetches the title, channel name and the thumbnail automatically just using url.

```
{ {< yt_video url="" >}}
```

{{< yt_video url="https://youtu.be/dQw4w9WgXcQ" >}}

## End