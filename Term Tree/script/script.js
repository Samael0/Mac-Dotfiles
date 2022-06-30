const Config = {
    name: "jose",
    scale: 1,
    Links: [
        [
            "Main",
            [
                ["ToDoist", "https://todoist.com/app/today"]
            ]
        ],
        [
            "Dev",
            [
                ["GitHub", "https://github.com"],
                ["Jira", "https://pricespider.atlassian.net/jira/your-work"],
                ["Confluence", "https://pricespider.atlassian.net/wiki/home"],
                ["Kibana Prod.", "https://search-scout-prod-73mgl5wo7vcgspubknecxnyk4i.us-east-1.es.amazonaws.com/_plugin/kibana/app/kibana"],
                ["RabbitMQ Prod.", "https://happy-seahorse.rmq.cloudamqp.com/#/"],
                ["RabbitMQ Local", "http://localhost:15672/#/"],
                ["El Cap", "http://elcap.pricespider.dev/"],
                ["DataDog", "https://app.datadoghq.com/account/login?next=%2F"],
                ["BrightData", "https://brightdata.com/cp/howto"],
                ["Prowl", "https://prowl.pricespider.com/login"],
                ["JSON Beautify", "https://jsonbeautifier.org/"]
            ]
        ],
        [
            "PriceSpider",
            [
                ["BambooHR", "http://pricespider.bamboohr.com/"],
                ["ADP", "https://online.adp.com/signin/v1/?APPID=WFNPortal&productId=80e309c3-7085-bae1-e053-3505430b5495&returnURL=https://workforcenow.adp.com/&callingAppId=WFN"],
                ["Greenhouse", "https://app2.greenhouse.io/dashboard"],
                ["Learning Hub", "https://pricespider.docebosaas.com/pages/22/main-dashboard"]
            ]
        ],
        [
            "Emails",
            [
                ["Outlook", "https://outlook.office365.com/mail/"]
            ]
        ]
    ]
}

const Main = (() => {
    const list = document.getElementById("list");
    const names = document.querySelectorAll("[data-Name]");
    const search = document.getElementById("search");
    const form = document.forms[0];

    const init = () => {
        list.innerHTML = Config.Links.map(([gName, Links]) => `
            <li>
                <h1 onclick="this.parentNode.classList.toggle('hideChildren')">${gName}</h1>
                <ul>
                    ${Links.map(([lName, url]) => `
                        <li>
                            <a href="${url}">${lName}</a>
                        </li>`
                    ).join("")}
                </ul>
            </li>` 
        ).join("")
        
        names.forEach(el => {
            el.innerText = Config.name;
        });

        document.addEventListener("keydown", e => e.key.length === 1 && search.focus());
        search.addEventListener("keydown", () => (window.event ? event.keyCode : e.which) == 13 && form.submit());
    };

    return {
        init,
    };
})();

Main.init()
