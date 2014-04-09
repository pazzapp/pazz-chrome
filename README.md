# Pazz

Pazz is a deterministic password manager.

Like 1Password or Lastpass it lets you use different passwords for different websites. Unlike the above however there is no need to trust an external party, or store any kind of file or 'vault' as the passwords are generated on the fly each time you look them up.

This means you can't choose your own passwords, but also that you'll never lose you passwords so long as you remember your master password.


## pazz-chrome

pazz-chrome is a simple chrome extension that can use Pazz to generate and fill passwords quickly.

### Usage:

To install pazz-chrome currently you can simply clone this repo and install it directly in developer mode in chrome.

1. Go to Settings > Tools > extensions in chrome
1. Tick "developer mode" in the top right corner
1. Click "Load unpacked extension" button on the left
1. Browse to the directory in which you cloned the pazz-chrome repo
1. To use the extension select a password field on a website and press the 'P*' icon on the toolbar to the right of the address bar.


# Possible enhancements

* Don't prompt for X minutes
 > store the password seed in memory for a time to mitigate needing to enter master password over and over.
