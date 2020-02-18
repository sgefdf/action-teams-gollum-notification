module.exports.getJsonCard = function(payload) {
    return {
        "@type": "MessageCard",
        "@context": "https://schema.org/extensions",
        "summary": "Github wiki notification",
        "themeColor": "0078D7",
        "title": `Wiki page ${payload.pages[0].page_name} ${payload.pages[0].action}`,
        "sections": [
          {
            "activityTitle": payload.sender.login,
            "activitySubtitle": payload.repository.updated_at,
            "activityImage": payload.sender.avatar_url,
            "facts": [
              {
                "name": "Repository:",
                "value": payload.repository.full_name
              },
              {
                "name": "Changed pages:",
                "value": payload.pages.map(p => p.page_name).join(', ')
              }
            ],
            "text": `User ${payload.sender.login} modified ${payload.pages.length} page(s). See the detailed list bellow.`
          }
        ],
        "potentialAction": [
          {
            "@type": "OpenUri",
            "name": "View in GitHub",
            "targets": [
              {
                "os": "default",
                "uri": payload.pages[0].html_url
              }
            ]
            }
        ]
    }

}
