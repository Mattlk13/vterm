export default `
/**
 * xterm.js: xterm, in the browser
 * Copyright (c) 2014-2016, SourceLair Private Company (www.sourcelair.com (MIT License)
 * Copyright (c) 2012-2013, Christopher Jeffrey (MIT License)
 * https://github.com/chjj/term.js
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 *
 * Originally forked from (with the author's permission):
 *   Fabrice Bellard's javascript vt100 for jslinux:
 *   http://bellard.org/jslinux/
 *   Copyright (c) 2011 Fabrice Bellard
 *   The original design remains. The terminal itself
 *   has been extended to include xterm CSI codes, among
 *   other features.
 */

/*
 *  Default style for xterm.js
 */

.terminal {
    background-color: transparent;
    color: #fff;
    font-feature-settings: "liga" 0;
    position: relative;
}

.terminal.focus,
.terminal:focus {
    outline: none;
}

.terminal .xterm-helpers {
    position: absolute;
    top: 0;
}

.terminal .xterm-helper-textarea {
    /*
     * HACK: to fix IE's blinking cursor
     * Move textarea out of the screen to the far left, so that the cursor is not visible.
     */
    position: absolute;
    opacity: 0;
    left: -9999em;
    top: 0;
    width: 0;
    height: 0;
    z-index: -10;
    /** Prevent wrapping so the IME appears against the textarea at the correct position */
    white-space: nowrap;
    overflow: hidden;
    resize: none;
}

.terminal a {
    color: inherit;
    text-decoration: none;
}

.terminal a:hover {
    cursor: pointer;
    text-decoration: underline;
}

.terminal a.xterm-invalid-link:hover {
    cursor: text;
    text-decoration: none;
}

.terminal.focus:not(.xterm-cursor-style-underline):not(.xterm-cursor-style-bar) .terminal-cursor {
    background-color: #fff;
    color: #000;
}

.terminal:not(.focus) .terminal-cursor {
    outline: 1px solid #fff;
    outline-offset: -1px;
    background-color: transparent;
}

.terminal:not(.xterm-cursor-style-underline):not(.xterm-cursor-style-bar).focus.xterm-cursor-blink-on .terminal-cursor {
    background-color: transparent;
    color: inherit;
}

.terminal.xterm-cursor-style-bar .terminal-cursor,
.terminal.xterm-cursor-style-underline .terminal-cursor {
    position: relative;
}
.terminal.xterm-cursor-style-bar .terminal-cursor::before,
.terminal.xterm-cursor-style-underline .terminal-cursor::before {
    content: "";
    display: block;
    position: absolute;
    background-color: #fff;
}
.terminal.xterm-cursor-style-bar .terminal-cursor::before {
    top: 0;
    bottom: 0;
    left: 0;
    width: 1px;
}
.terminal.xterm-cursor-style-underline .terminal-cursor::before {
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
}
.terminal.xterm-cursor-style-bar.focus.xterm-cursor-blink.xterm-cursor-blink-on .terminal-cursor::before,
.terminal.xterm-cursor-style-underline.focus.xterm-cursor-blink.xterm-cursor-blink-on .terminal-cursor::before {
    background-color: transparent;
}
.terminal.xterm-cursor-style-bar.focus.xterm-cursor-blink .terminal-cursor::before,
.terminal.xterm-cursor-style-underline.focus.xterm-cursor-blink .terminal-cursor::before {
    background-color: #fff;
}

.terminal .composition-view {
    color: #FFF;
    display: none;
    position: absolute;
    white-space: nowrap;
    z-index: 1;
}

.terminal .composition-view.active {
    display: block;
}

.terminal .xterm-viewport {
    overflow-y: auto;
    overflow-x: hidden;
}

.terminal .xterm-wide-char,
.terminal .xterm-normal-char {
    display: inline-block;
}

.terminal .xterm-rows {
    position: absolute;
    left: 0;
    top: 0;
}

.terminal .xterm-rows > div {
    /* Lines containing spans and text nodes ocassionally wrap despite being the same width (#327) */
    white-space: nowrap;
}

.terminal .xterm-scroll-area {
    visibility: hidden;
}

.terminal .xterm-char-measure-element {
    display: inline-block;
    visibility: hidden;
    position: absolute;
    left: -9999em;
}

/*
 *  Determine default colors for xterm.js
 */
.terminal .xterm-bold {
    font-weight: bold;
}

.terminal .xterm-underline {
    text-decoration: underline;
}

.terminal .xterm-blink {
    text-decoration: blink;
}

.terminal .xterm-hidden {
    visibility: hidden;
}
`