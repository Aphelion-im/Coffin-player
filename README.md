# Dr. Chappie's Coffin Player

Updated: 5-11-2022

Just a fun project for my good friend Mike.

## Highlights of this project

- audioPlayer.addEventListener('timeupdate', playProgress);
- e.offsetX
- el.offsetWidth
- el.download = 'filename.ext';
- audioPlayer.play();
- audioPlayer.pause();
- audioPlayer.currentTime;
- audioPlayer.duration;
- isNaN(); true/false
- <progress> and <meter>
- Must have a value (= truthy) before displaying something. If NaN, null, undefined, 0, etc. (= falsey): do nothing.


## Google Lighthouse Analysis

- [Avoid non-composited animations](https://web.dev/non-composited-animations/)

Google Lighthouse says:

> Animations which are not composited can be janky and increase Cumulative Layout Shift (CLS). Unsupported CSS Property: width"

Original code:

```css
.progress {
  background-color: var(--chappieblue3);
  height: 100%;
  width: 0; /* Has to be 0 to prevent 100% bar during player init */
  transition: width 0.1s linear;
}
```

Rewritten code:

```css
.progress {
  width: 100%;
  height: 100%;
  transition: transform 0.1s ease-in;
  background-color: red;
  transform: scaleX(
    0.3
  ); /* Now uses Transform to scale the progressbar, which is composited */
  transform-origin: left;
}
```

```html
HTML tags <progress>and <meter>are even better.</meter></progress>
```

After implementing the progress- and volumebar with the progress tag, Google Lighthouse didn't show the CLS message as described above.
