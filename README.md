# action-teams-gollum-notification

### Description
This action takes a payload of a gollum (Github wiki) event and sends a notification in form of [Office 365 Connector Card](https://docs.microsoft.com/en-us/microsoftteams/platform/webhooks-and-connectors/how-to/connectors-using) to a specified Microsoft Teams channel via a webhook. As Github extension for Microsoft Teams doesn't support gollum event notifications, this is a simple and convenient solution to get notified on updates (create, edit) in your repository's wiki pages. 

![Card example 1](https://github.com/sgefdf/action-teams-gollum-notification/blob/master/examples/card_example01.png?raw=true)

### Required environment variables
* `WEBHOOK_URL` A webhook URL to a Teams channel you want notifications to be sent to. [How to get the URL?](https://outlook.office.com/webhook/8d4c8bf3-3f22-40b7-aef5-c003ffbb705b@cc9f2980-7a8f-4e44-9914-4aaa64cafb16/IncomingWebhook/7bce33c9f54940f8bde1dde3318fba19/6a604681-1537-47da-a897-cce0001e4573)

### Usage
```yaml
on: [gollum]

jobs:
  wiki_teams_notification:
    runs-on: ubuntu-latest
    name: Wiki Teams notification
    steps:
    - uses: actions/checkout@v2
      name: Checkout
    - uses: ./.github/actions
      name: Send notification
      env:
        # A webhook URL to a Teams channel you want notifications to be sent to.
        WEBHOOK_URL: ${{ secrets.WEBHOOK_URL }}
```
