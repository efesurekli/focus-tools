# Block Site

**Block Site** (formerly known as _Stop Social Media_) is a simple **Chrome/Firefox extension** that improves your productivity by blocking access to distracting websites as you specify.

## Icon

<img src="public/icon_128.png" width="48">

<img src="public/toolbar/light.png" width="480">
<img src="public/toolbar/dark.png" width="480">

## Usage

Click on the icon. Enter sites you would like to block, prepend `!` to exclude site from blocking, example:

```
facebook.com
instagram.com
youtube.com
!music.youtube.com
reddit.com
!reddit.com/r/MachineLearning
```

You can also add a regex to catch multiple urls:

```
youtube.com$ // only block homepage
```

Choose how to resolve blocked site: **Close Tab**, or **Show Blocked info page**.

**Blocked info page** shows what _url_ was blocked, based on which _rule_ it was blocked, and optionally a blocked count over a chosen period of time:
_All Time_, _This Month_, _This Week_, or _Today_.

## Test and deployment

- `yarn test`
- `yarn __rmrf-dist __no-emit __build-chrome ` -for some reason pure build gave an error [TODO]

## Privacy notice

Block Site doesn't collect any personal information or data.
Any user settings are stored in your browser only.
