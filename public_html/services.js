const protocol = "https";
const domain = "appifyhub.com";
const services = [
  {
    name: "Peeps",
    description: "Manages personal user data, adds, deletes and updates users",
    tech: [
      {name: "Go", link: "https://golang.org"},
      {name: "Gin Gonic", link: "https://gin-gonic.com"},
      {name: "Mongo DB", link: "https://www.mongodb.com"}
    ],
    subdomain: "peeps",
    pingEndpoint: "/ping",
    fontIcon: "f1ae"
  },
  {
    name: "Tokenizer",
    description: "Manages authentication tokens, handles login, logout and session validation",
    tech: [
      {name: "Kotlin", link: "https://kotlinlang.org"},
      {name: "Ktor", link: "https://ktor.io"},
      {name: "Postgres", link: "https://www.postgresql.org"},
      {name: "Exposed", link: "https://github.com/JetBrains/Exposed"},
      {name: "Koin", link: "https://insert-koin.io"}
    ],
    subdomain: "tokenizer",
    pingEndpoint: "/ping",
    fontIcon: "e801"
  },
  {
    name: "Mailer",
    description: "Sends e-mails originating from a verified domain",
    tech: [
      {name: "Python", link: "https://www.python.org"},
      {name: "Flask", link: "https://github.com/pallets/flask"},
      {name: "Apache WSGI", link: "https://modwsgi.readthedocs.io/en/develop/getting-started.html"},
      {name: "Mailgun", link: "https://www.mailgun.com"}
    ],
    subdomain: "mailer",
    pingEndpoint: "/ping",
    fontIcon: "f0e0"
  },
  {
    name: "Bubbles",
    description: "Sends SMS and social-network messages from verified numbers and short-codes",
    tech: [
      {name: "Java", link: "https://openjdk.java.net"},
      {name: "Kotlin", link: "https://kotlinlang.org"},
      {name: "Spring Boot", link: "https://spring.io/projects/spring-boot"},
      {name: "Twilio", link: "https://www.twilio.com"}
    ],
    subdomain: "bubbles",
    pingEndpoint: "/ping",
    fontIcon: "f4ac"
  },
  {
    name: "Pusher",
    description: "Manages tokens and sends secure push messages to users, devices and groups",
    tech: [
      {name: "Firebase Cloud Functions", link: "https://firebase.google.com/docs/functions"},
      {name: "Firebase Cloud Firestore", link: "https://firebase.google.com/docs/firestore"},
      {name: "Firebase Cloud Messaging", link: "https://firebase.google.com/docs/cloud-messaging"},
      {name: "Node JS", link: "https://nodejs.org/en"},
      {name: "Express JS", link: "https://expressjs.com"},
      {name: "Pug JS", link: "https://pugjs.org"}
    ],
    subdomain: "pusher",
    pingEndpoint: "/ping",
    fontIcon: "e802"
  },
  {
    name: "Timecrypt",
    description: "Non-realtime, two-way, self-destructible, encrypted messages",
    tech: [
      {name: "See on GitHub", link: "https://github.com/milosmns/Timecrypt"}
    ],
    subdomain: "timecrypt",
    pingEndpoint: "/",
    fontIcon: "e803"
  }
];

function serviceName(name, icon) {
  return `<h2>${fontIcon(icon)} ${name}</h2>`;
}

function serviceDescription(description) {
  return `<p class="lead" style="margin-top: 3rem; margin-bottom: 2em;">${description}</p>`;
}

function apiDocsButton(url) {
  return `<a href="${url}" style="text-decoration: none; margin-top: 2rem;" target="_blank" class="btn btn-outline-info">Open service docs</a>`;
}

function horizonalLine() {
  return "<hr style='background-color: rgb(25,60,60); margin-top: 2rem;' />";
}

function techLink(name, url) {
  return `<a href="${url}" target="_blank">${name}</a>`;
}

function fontIcon(icon) {
  return `<span class="appify-hub-font text-info">&#x${icon}</span>`;
}

function statusText(subdomain, pingEndpoint) {
  const successFn = function () {
    // noinspection JSUnresolvedFunction
    const status = $(`#${subdomain}`);
    // noinspection JSUnresolvedFunction
    status.removeAttr("class");
    // noinspection JSUnresolvedFunction
    status.attr("class", "badge badge-success");
    status.text("Online!");
  };
  const failureFn = function (jqXHR, textStatus, error) {
    // noinspection JSUnresolvedFunction
    const status = $(`#${subdomain}`);
    // noinspection JSUnresolvedFunction
    status.removeAttr("class");
    // noinspection JSUnresolvedFunction
    status.attr("class", "badge badge-danger");
    status.text("Offline!");

    console.error(`Failed pinging, reason: ${textStatus}`);
    console.error(error);
  };
  const pingUrl = `${protocol}://${subdomain}.${domain}${pingEndpoint}`;
  const proxy = 'https://cors-anywhere.herokuapp.com/';

  // noinspection JSUnresolvedVariable,JSUnresolvedFunction - jQuery will be available
  $.ajax({
    timeout: 10000, // ms
    url: proxy + pingUrl,
    success: successFn,
    error: failureFn
  });
  return `<p style="margin-top: 0.8rem;">Status &nbsp; <span id="${subdomain}" class="badge badge-info">Checking...</span></p>`;
}

function techLinks(tech) {
  let result = `<p style="margin-top: 2rem;">♥ Tech used: `;
  for (let i = 0; i < tech.length; i++) {
    let iLink = techLink(tech[i].name, tech[i].link);
    result += iLink;
    if (i !== tech.length - 1) {
      // don't add a plus for last item
      result += " + ";
    }
  }
  result += `</p>`;
  return result;
}

function serviceInfo(service) {
  let url = `${protocol}://${service.subdomain}.${domain}`;
  let result = `<div class="container-md bg-light rounded padded below-content cell">`;
  result += serviceName(service.name, service.fontIcon);
  result += serviceDescription(service.description);
  result += horizonalLine();
  result += techLinks(service.tech);
  result += statusText(service.subdomain, service.pingEndpoint);
  result += horizonalLine();
  result += apiDocsButton(url);
  result += `</div>`;
  return result;
}

function servicesHtml() {
  let result = `<section id="services">`;
  for (let i = 0; i < services.length; i++) {
    result += serviceInfo(services[i]);
  }
  result += `</section>`;
  return result;
}