const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
//HEADER
 const logo = document.getElementById("logo-img");
 logo.setAttribute('src', siteContent["nav"]["img-src"]);

 const navItems = document.getElementsByTagName('a');
 for (let i = 0; i < navItems.length; i++) {
   const item = navItems[i];
   item.append(siteContent['nav'][`nav-item-${i + 1}`]);

   // TASK 3 NAV STYLING
   item.style.color = 'green';
 };
 
//CTA
 const ctaHeader = document.querySelector('.cta-text h1');
 ctaHeader.textContent = siteContent['cta']['h1'];

 const ctaButton = document.querySelector('.cta-text button');
 ctaButton.textContent = siteContent['cta']['button'];

 const ctaImg = document.getElementById('cta-img');
 ctaImg.setAttribute('src', siteContent['cta']['img-src']);

//MAIN CONTENT
 const mainContent = document.querySelectorAll('.main-content .text-content');
 mainContent[0].children[1].textContent = siteContent['main-content']['features-content'];
 mainContent[0].children[0].textContent = siteContent['main-content']['features-h4'];
 
 mainContent[1].children[0].textContent = siteContent['main-content']['about-h4'];
 mainContent[1].children[1].textContent = siteContent['main-content']['about-content'];
 
 mainContent[2].children[0].textContent = siteContent['main-content']['services-h4'];
 mainContent[2].children[1].textContent = siteContent['main-content']['services-content'];
  
 mainContent[3].children[0].textContent = siteContent['main-content']['product-h4'];
 mainContent[3].children[1].textContent = siteContent['main-content']['product-content'];
  
 mainContent[4].children[0].textContent = siteContent['main-content']['vision-h4'];
 mainContent[4].children[1].textContent = siteContent['main-content']['vision-content'];
 
 const mainContentImg = document.getElementById('middle-img');
 mainContentImg.setAttribute('src', siteContent['main-content']['middle-img-src']);
 
//CONTACT
 const contact = document.querySelector('.contact');
 contact.children[0].textContent = siteContent['contact']['contact-h4'];
 contact.children[1].textContent = siteContent['contact']['address'];
 contact.children[2].textContent = siteContent['contact']['phone'];
 contact.children[3].textContent = siteContent['contact']['email'];
 
//FOOTER
 const footer = document.querySelector('footer');
 footer.textContent = siteContent['footer']['copyright'];

 
//nav append items
 const nav = document.querySelector('nav');
 const newLastNavItem = document.createElement('a');
 const newFirstNavItem = document.createElement('a');
 newFirstNavItem.textContent = 'Hello';
 newLastNavItem.textContent = 'world';
 newFirstNavItem.setAttribute('href', '#');
 newLastNavItem.setAttribute('href', '#');
 nav.appendChild(newLastNavItem);
 nav.prepend(newFirstNavItem);