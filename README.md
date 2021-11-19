# hexo-bubble

A Hexo tag plugin to format text into chat-like speech bubbles. A work in progress.

## Installation

```
npm i hexo-bubble --save
```

## Usage

Place `<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/hexo-bubble@latest/src/css/bubble.min.css">` at the *beginning* of your post or *directly under* your `<!-- more -->` if the tag is being used there.

### Syntax

```markdown
{% bubble [Character] [attribute] %}
  You can use *Markdown* in the text.

  <thought>Wrap around thought bubbles with these tags to give the text a blue color!</thought>

  Have special character endings and don't want them to be cut-off by word wrapping? Use these tags to make sure it stays attached to the last <hold>word☆</hold>
{% endbubble %}
```

- `[Character]`: Charater name. No spaces within the name.
- `[attribute]`: **Optional.** Special styling for the bubbles if the character is off-screen (hidden) or unknown (but the reader knows who they are). Available options are `unknown` and `hidden`. It must be *lowercase*.
- `<thought></thought`, `<th></th>`: Special tag to wrap around thoughts. It's in a blue color.
- `<hold></hold>`, `<ho></ho>`: Special tag to prevent special characters being cut-off by word wrap.

### Options

To use a specific series' css file for styling, insert `<link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/hexo-bubble@latest/src/css/{series}.min.css">` at the *beginning* of your post or *directly under* your `<!-- more -->` if the tag is being used there. Complete series css files are `enst` (Ensemble Stars) and `pjsk` (Project Sekai).

`enst.css` has a special font for Natsume's spells. Use the `<spell></spell>` or `<sp></sp>` tags to activate it!

## Customization

It's possible to use your own css for the variables. Just follow the format below.

```css
[character="NAME"][attribute] {
  --color: COLOR;
  --hue: HUE;
  --name: "NAME";
  --icon: url("URL");
}
```

## Examples

**LIVE VERSION:** [TL archive](https://watatomo.github.io/tl/post/hexo-bubble/)

**Input**
```markdown
{% bubble Wataru %}
  <th>(Haha. Could you be trying to say, "I really like you, Hibiki-senpai! You're so cool! I love you!"...?)</th>

  <th>(My, you're far too kind. Thank you, Tomoya<hold>-kun♪</hold> Kiss...☆)</th>
{% endbubble %}

{% bubble Tomoya %}
  <th>(Uhm, I think there's a big misunderstanding here?! What the hell was that weird signal I got back?)</th>

  <th>(Oh, whatever. This signal I sent can only mean one thing! The rest is up to you, Hibiki-senpai!)</th>
{% endbubble %}
```

**Output**
![Wataru and Tomoya](https://raw.githubusercontent.com/watatomo/hexo-bubble/main/src/img/1.png)

**Story:** [Dead End Land](https://watatomo.github.io/tl/post/dead_end_land/7/)

**Input**
```markdown
{% bubble Nazuna hidden %}
  "Ding dong ding dong♪"
{% endbubble %}

{% bubble Izumi %}
  ......?
{% endbubble %}

{% bubble Nazuna hidden %}
  "This is a public service announcement. There is currently a special event being held in the ES Building—Idol of the Dead."
{% endbubble %}

{% bubble Izumi %}
  Mmn? Idol of the what now? That's Nazunyan's voice, isn't it?
{% endbubble %}
```

**Output**
![Nazuna and Izumi](https://raw.githubusercontent.com/watatomo/hexo-bubble/main/src/img/2.png)

**Story:** [RELOADED](https://watatomo.github.io/tl/post/reloaded/6/)

**Input**
```markdown
{% bubble Natsume %}
  HoweVER. Within a game where everything is proGRAMMED, everything works with much simpler loGIC.

  In this world where everything obeys my every comMAND, I will reign as god and control everyTHING. I'll make sure they can live in peace and joy within this miniature <ho>garDEN—</ho>

  And I will give everyone an equal opportunity to experience their own happily ever afTER.

  <sp>—Welcome to paradise, my <ho>idols♪</ho></sp>
{% endbubble %}

{% bubble Tsumugi %}
  Um, but, no matter how you look at it, I'm pretty sure this world is a dystopia, right?
{% endbubble %}
```

**Output**
![Natsume and Tsumugi](https://raw.githubusercontent.com/watatomo/hexo-bubble/main/src/img/3.png)

**Story:** [SHINSEKAI -STRANGE NEW WORLD-](https://fortunebanquet.tumblr.com/post/658710005507375104/shinsekai-strange-new-world-empire-of-fantasy-7)

## Acknowledgements

- [Mille](https://twitter.com/neeneemi) for helping me through JavaScript hell
- [Kyuu](https://twitter.com/junsweats) for optimizing my original css
- EnStars translators as a whole; this plugin is optimized for you guys
