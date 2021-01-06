# NFC plugin for Volumio

In the times of streamed audio and non-physical music storage, there's the question of how to easily play your favorite music - without using a computer/table/mobile/Web-UI.
An NFC reader can be a nice alternative, particularly when the main consumers are children.

This plugin provides a configurable mapper of tokens to volumio playlists.

## How it looks like

Managing assignments of tokens and playlists

![The configuration page is used for assigning playlists](docs/UI-config-token-management.png "the configuration page is used for assigning playlists")

Playback and technical options

![Playback and technical options](docs/UI-config-playback-tech.png)

## Hardware

I am using a [Mifare RC522](https://www.google.com/search?q=mifare+nfc+rc522) which is the cheapest way of setting the whole thing up.
However, any SPI-based reader should do. Please check your reader's installation instruction. you should be fine once `lsmod | grep spi` and `ls /dev/spi*` return non-empty-outputs

## Limitations

Instead of modifying Volumio core for the best solution (add the assignment feature to any playlist on the playlist-UI), I opted for implementing a modification-free plugin. This however comes with some limitations: The UI for the configuration is very limited with respec to its controls. There are only predefined elements which are rendered by volumio-ui. It's (for example) not possible to have a rich table (with sorting and filtering), neither is is reactive (sone changes will be only shown once leaving an re-entering the page).

## Bugs

There are bugs. For sure. If you find them, please report them by creating an issue in this very repository. You'll help others as well. In case you're able to fix it yourself, I'm happy for every PR.

In case you've got ideas for how to improve the plugin, please open an issue as well! I cannot promise anything about a roadmap, but I'll be happy to read someone at least uses it :tada:
