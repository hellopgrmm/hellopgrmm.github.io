/* Lyrcis Parser Tools
* By Hello-Programming (C) 2023-2025
* Official Website:https://hellopgrmm.github.io/
* Have Fun!
* Thanks for using our scripts */
function ParseLyrics(LyricsText,Type){var NORMAL = 'NORMAL';var DICT = 'DICT';var OriginalLyricsText = LyricsText;var SplitLyrics = OriginalLyricsText.split('\n');var ArrayOfLyrics = [];var Kara = {};for(var i = 0;i < SplitLyrics.length;i++){var Temp = SplitLyrics[i];const match = Temp.match(/\[(\d{2}):(\d{2})\.(\d{2})\]/);if(match){const TimeCode = match[0];const EXLyrics = Temp.substring(TimeCode.length).trim();var Extract = TimeCode.replace('[','').replace(']','');if(Type == NORMAL){ArrayOfLyrics.push(Extract);ArrayOfLyrics.push(EXLyrics);}else if(Type == DICT){Kara[Extract] = EXLyrics;}}}if(Type == NORMAL){return ArrayOfLyrics;}else if(Type == DICT){return Kara;};}