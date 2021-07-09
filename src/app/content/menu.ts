export const MenuItems = [
  {
    id: "services",
    title: "Services",
    url: "services",
    important: true,
    icon: "fa fa-cloud",
    items: [
      {
        title: "Cloud",
        url: "cloud",
        important: true,
        icon: "fa fa-cloud",
        items: [
          {
            title: "Cloud Migration"
          },
          {
            title: "Cloud Development"
          }
        ]
      }, {
        title: "AI/ML",
        url: "aiml",
        important: true,
        icon: "fa fa-search-plus",
        items: [
          {
            title: "Machine Learning"
          },
          {
            title: "AI/ML Powered Search"
          }
        ]
      }, {
        title: "BI",
        url: "bi",
        important: true,
        icon: "fa fa-area-chart",
        items: [
          {
            title: "Data Analytics"
          },
          {
            title: "Data Warehouse"
          }
        ]
      }, {
        title: "Blockchain",
        url: "blockchain",
        important: true,
        icon: "fa fa-area-chart",
        items: [
          {
            title: "Blockchain Development"
          },
          {
            title: "Blockchain Consulting"
          }
        ]
      }, {
        title: "Cybersecurity",
        url: "cyber",
        important: true,
        icon: "fa fa-area-chart",
        items: [
          {
            title: "Security Audits"
          },
          {
            title: "Penetration Testing"
          }
        ]
      }, {
        title: "DevSecOps",
        url: "devsecops",
        important: true,
        icon: "fa fa-area-chart",
        items: [
          {
            title: "Security Automation"
          },
          {
            title: "Isolation"
          }
        ]
      }, {
        title: "Staffing",
        url: "staffing",
        important: true,
        icon: "fa fa-area-chart",
        items: [
          {
            title: "IT Staffing"
          },
          {
            title: "Diversity Recruiting"
          }
        ]
      }
    ]
  },
  {
    id: "products",
    title: "Products",
    url: "products",
    important: true,
    isChild: true,
    icon: "fa fa-paper-plane",
    items: [
      {
        title: "CapsGraph"
      },
      {
        title: "GeoTeGra"
      }
    ]
  },
  {
    title: "Clients",
    url: "clients",
    icon: "fa fa-handshake-o"
  },
  {
    title: "About Us",
    url: "about",
    icon: "fa fa-id-card-o"
  },
  {
    title: "Contracts",
    url: "certs",
    icon: "fa fa-id-card-o"
  },
  {
    title: "Careers",
    url: "careers",
    icon: "fa fa-id-card-o"
  }
];
