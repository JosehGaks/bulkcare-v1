import { CycleUnits } from "@/types/supportCycleUnits";

const supportCycleUnits: CycleUnits[] = [
  {
    id: 1,
    title: "Quality Assurance",
    icon: (<svg stroke="currentColor" width="57" height="57" viewBox="0 0 1024 1024" fill="#ffffff" className="icon" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M678.584675 765.172506v157.995691l75.697852 31.505938V723.768586a429.379161 429.379161 0 0 1-75.697852 41.40392zM269.717473 723.768586V953.098138l75.697852-31.505938v-156.419694a429.309162 429.309162 0 0 1-75.697852-41.40392zM511.999 798.78444a428.955162 428.955162 0 0 1-105.993793-13.241974v238.457534L511.999 979.886086 617.992793 1023.998V785.542466A429.025162 429.025162 0 0 1 511.999 798.78444zM511.999 0C308.479398 0 142.903721 165.575677 142.903721 369.097279S308.479398 738.192558 511.999 738.192558s369.097279-165.575677 369.097279-369.097279S715.520602 0 511.999 0z m0 660.198711c-161.345685 0-292.611428-131.265744-292.611428-292.611429 0-161.347685 131.265744-292.613428 292.611428-292.613428s292.611428 131.265744 292.611428 292.613428c0 161.347685-131.263744 292.611428-292.611428 292.611429zM511.999 135.563735c-127.93575 0-232.021547 104.083797-232.021547 232.023547S384.06325 599.606829 511.999 599.606829s232.021547-104.083797 232.021547-232.021547c0-127.93775-104.083797-232.021547-232.021547-232.021547zM607.360814 502.999018L511.999 452.865115 416.639186 502.999018l18.211965-106.183793-77.14785-75.199853 106.617792-15.49397L511.999 209.509591l47.679907 96.611811 106.617792 15.49397-77.14785 75.199853 18.211965 106.183793z"></path></g></svg>),
    description: "We ensure the highest standards of service through continuous monitoring and evaluation of our support processes.",
  },
  {
    id: 2,
    title: "Recruitment",
    icon: (<svg stroke="currentColor" width="57" height="57" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 360 360"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_91_"> <path id="XMLID_92_" d="M355.606,334.381l-63.854-63.855C315.619,241.903,330,205.107,330,165.013c0-90.981-74.019-165-165-165 S0,74.031,0,165.013s74.019,165,165,165c40.107,0,76.914-14.391,105.541-38.271l63.853,63.853 c2.929,2.929,6.768,4.393,10.606,4.393s7.678-1.464,10.606-4.393C361.465,349.736,361.465,340.239,355.606,334.381z M95,235.013 c0-38.663,31.341-70,70-70c-24.852,0-45.001-20.147-45.001-45.001S140.148,75.013,165,75.013s45,20.146,45,44.999 s-20.148,45.001-45,45.001c38.658,0,69.999,31.337,69.999,70H95z"></path> </g> </g></svg>),
    description: "We recruit top talent to provide expert customer support, ensuring your customers receive the best possible care.",
  },
  {
    id: 3,
    title: "Inhouse Training Center",
    icon: (<svg stroke="currentColor" width="57" height="57" fill="#ffffff" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 496"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M432,336h-10.84c16.344-13.208,26.84-33.392,26.84-56v-32c0-30.872-25.128-56-56-56h-32c-2.72,0-5.376,0.264-8,0.64V48 h16V0H0v48h16v232H0v48h187.056l40,80H304v88h192v-96C496,364.712,467.288,336,432,336z M422.584,371.328l-32.472,13.92 L412.28,352h5.472L422.584,371.328z M358.944,352h34.112L376,377.576L358.944,352z M361.872,385.248l-32.472-13.92L334.24,352 h5.472L361.872,385.248z M432.008,280C432,310.872,406.872,336,376,336s-56-25.128-56-56h37.424 c14.12,0,27.392-5.504,37.368-15.48l4.128-4.128c8.304,10.272,20.112,16.936,33.088,18.92V280z M48,192v72h107.176 c0.128,0.28,0.176,0.584,0.312,0.856L163.056,280H32V48h304v149.48c-18.888,9.008-32,28.24-32,50.52v32h-65.064l-24.816-46.528 C208.368,222.696,197.208,216,185,216c-10.04,0-18.944,4.608-25,11.712V192H48z M144,208v40H64v-40H144z M360,208h32 c22.056,0,40,17.944,40,40v15.072c-9.168-2.032-17.32-7.48-22.656-15.48l-8.104-12.152l-17.768,17.768 c-6.96,6.96-16.208,10.792-26.048,10.792H320v-16C320,225.944,337.944,208,360,208z M16,16h336v16H16V16z M16,312v-16h155.056 l8,16H16z M256,392h-19.056L169.8,257.712c-1.176-2.36-1.8-4.992-1.8-7.608V249c0-9.376,7.624-17,17-17c6.288,0,12.04,3.456,15,9 l56,104.992V392z M247.464,296h58.392c1.28,5.616,3.232,10.968,5.744,16H256L247.464,296z M264.536,328h57.952 c2.584,2.872,5.352,5.568,8.36,8H268.8L264.536,328z M480,480h-32v-32h32V480z M480,432h-32v-32h-16v80H320v-88h-48v-40h45.76 l-7.168,28.672L376,408.704l65.416-28.032l-7.144-28.56C459.68,353.312,480,374.296,480,400V432z"></path> <path d="M160,128v-16h-16.808c-1.04-5.096-3.072-9.832-5.856-14.024l11.92-11.92l-11.312-11.312l-11.92,11.92 c-4.192-2.784-8.928-4.816-14.024-5.856V64H96v16.808c-5.096,1.04-9.832,3.072-14.024,5.856l-11.92-11.92L58.744,86.056 l11.92,11.92c-2.784,4.192-4.816,8.928-5.856,14.024H48v16h16.808c1.04,5.096,3.072,9.832,5.856,14.024l-11.92,11.92 l11.312,11.312l11.92-11.92c4.192,2.784,8.928,4.816,14.024,5.856V176h16v-16.808c5.096-1.04,9.832-3.072,14.024-5.856 l11.92,11.92l11.312-11.312l-11.92-11.92c2.784-4.192,4.816-8.928,5.856-14.024H160z M104,144c-13.232,0-24-10.768-24-24 s10.768-24,24-24s24,10.768,24,24S117.232,144,104,144z"></path> <polygon points="244.28,80 272,80 272,64 235.72,64 203.72,112 176,112 176,128 212.28,128 "></polygon> <rect x="288" y="64" width="32" height="16"></rect> <path d="M224,144h-48v48h48V144z M208,176h-16v-16h16V176z"></path> <rect x="240" y="160" width="32" height="16"></rect> <rect x="288" y="160" width="32" height="16"></rect> </g> </g> </g> </g></svg>),
    description: "Our inhouse training center equips our team with the skills and knowledge they need to excel in customer service.",
  },
  {
    id: 4,
    title: "Regular Reporting and Analytics",
    icon: (<svg stroke="currentColor" width="57" height="57" fill="#ffffff" viewBox="0 0 512 512" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="B_-_135_x2C__chart_x2C__Analytics_x2C__graphs_x2C__market_x2C__schedule_x2C__time_x2C__trends"> <g> <path d="M160.196,234.708c-1.119-0.89-1.315-2.501-0.427-3.621 c0.888-1.118,2.536-1.316,3.654-0.427l28.04,22.182l24.714-14.548c1.221-0.723,2.799-0.329,3.555,0.923 c0.724,1.216,0.296,2.83-0.954,3.554l-26.166,15.468c-0.888,0.526-2.072,0.461-2.927-0.197L160.196,234.708z M299.244,266.104 h-10.893v43.015h10.893V266.104z M325.705,239.677h-10.896v69.441h10.896V239.677z M352.162,253.992h-10.925v55.126h10.925 V253.992z M378.592,232.108h-10.86v77.01h10.86V232.108z M405.053,216.375h-10.896v92.743h10.896V216.375z M432.168,192.647 h-10.86v116.471h10.86V192.647z M270.02,151.213c0,1.416-1.15,2.6-2.602,2.6c-1.447,0-2.598-1.184-2.598-2.6v-20.898l-7.999-4.608 l-24.418,30.64c-0.724,0.922-2.01,1.219-3.062,0.758c-3.457-1.317-6.975-2.468-10.662-3.457c-3.653-0.954-7.34-1.744-10.991-2.336 c-1.187-0.165-2.01-1.085-2.207-2.172l-5.792-38.734h-16.785l-5.858,38.734c-0.164,1.252-1.183,2.14-2.371,2.206 c-3.65,0.592-7.239,1.35-10.793,2.303c-3.72,0.988-7.271,2.172-10.728,3.489c-1.085,0.428-2.305,0.066-2.997-0.791l-24.418-30.64 l-14.513,8.393l14.348,36.498c0.428,1.119,0.033,2.336-0.888,3.028c-2.897,2.337-5.66,4.838-8.295,7.471 c-2.699,2.698-5.231,5.496-7.537,8.393c-0.724,0.888-1.941,1.183-2.994,0.789L69.364,175.93l-8.36,14.513l30.641,24.419 c0.921,0.758,1.217,2.008,0.756,3.062c-1.315,3.455-2.47,6.977-3.457,10.629c-0.954,3.654-1.743,7.372-2.334,11.026 c-0.165,1.151-1.089,2.008-2.174,2.171l-38.735,5.858v16.783l38.735,5.827c1.217,0.163,2.141,1.183,2.239,2.402 c0.526,3.588,1.316,7.206,2.27,10.795l0.033,0.065c0.954,3.686,2.142,7.24,3.457,10.662c0.428,1.087,0.066,2.304-0.822,2.962 l-30.608,24.42l8.36,14.546l36.498-14.349c1.085-0.427,2.303-0.065,2.994,0.789c2.371,2.931,4.903,5.728,7.537,8.393 c2.668,2.633,5.464,5.167,8.361,7.505c0.92,0.756,1.216,1.975,0.822,2.994L111.227,377.9l14.513,8.393l24.418-30.642 c0.757-0.953,2.043-1.249,3.063-0.789c3.423,1.351,7.008,2.501,10.629,3.457c3.653,0.986,7.374,1.775,11.06,2.336 c1.118,0.165,1.974,1.086,2.138,2.173l5.858,38.734h16.785l5.792-38.734c0.197-1.219,1.216-2.106,2.404-2.205 c3.618-0.562,7.238-1.351,10.826-2.304c3.687-0.988,7.271-2.14,10.728-3.489c1.085-0.428,2.272-0.066,2.963,0.821l24.418,30.642 l7.999-4.641v-20.865c0-1.448,1.15-2.6,2.598-2.6c1.451,0,2.602,1.151,2.602,2.6v22.378c-0.033,0.89-0.46,1.745-1.315,2.238 l-11.224,6.483c-1.119,0.658-2.533,0.395-3.325-0.625l-24.649-30.903c-3.128,1.12-6.285,2.14-9.478,2.996 c-3.128,0.821-6.351,1.546-9.643,2.106l-5.858,38.997c-0.164,1.284-1.249,2.337-2.601,2.337h-21.292 c-1.253,0-2.371-0.921-2.569-2.237l-5.857-39.097c-3.325-0.561-6.548-1.285-9.708-2.106c-3.193-0.856-6.35-1.876-9.445-2.996 l-24.616,30.903c-0.825,0.987-2.206,1.283-3.357,0.625l-18.331-10.598c-1.151-0.592-1.678-1.973-1.184-3.225l14.48-36.827 c-2.569-2.106-5.002-4.344-7.34-6.648c-2.335-2.369-4.575-4.837-6.679-7.339l-36.828,14.482c-1.183,0.428-2.567,0-3.193-1.153 l-10.53-18.265c-0.757-1.118-0.526-2.633,0.526-3.455l30.904-24.618c-1.121-3.126-2.108-6.252-2.963-9.412l-0.033-0.065 c-0.822-3.159-1.546-6.385-2.104-9.676l-38.969-5.856c-1.315-0.132-2.367-1.252-2.367-2.603v-21.293 c0-1.249,0.954-2.369,2.236-2.566l39.1-5.858c0.559-3.325,1.283-6.55,2.104-9.676c0.855-3.226,1.842-6.385,2.996-9.478 l-30.904-24.617c-0.987-0.79-1.283-2.206-0.625-3.324l10.531-18.265c0.592-1.219,2.042-1.778,3.292-1.285l36.828,14.48 c2.138-2.566,4.377-5.035,6.679-7.338c2.338-2.336,4.771-4.575,7.34-6.679l-14.48-36.827c-0.46-1.153,0-2.534,1.118-3.194 l18.397-10.629c1.118-0.625,2.532-0.395,3.357,0.625l24.616,30.935c3.128-1.15,6.285-2.172,9.478-3.027 c3.128-0.822,6.351-1.546,9.676-2.105l5.857-38.999c0.099-1.284,1.25-2.304,2.569-2.304h21.292c1.253,0,2.371,0.921,2.568,2.204 l5.89,39.098c3.292,0.559,6.515,1.284,9.643,2.105c3.193,0.855,6.35,1.877,9.478,3.027l24.649-30.935 c0.759-0.987,2.206-1.25,3.325-0.625l11.023,6.386c0.891,0.395,1.516,1.315,1.516,2.369V151.213z M296.346,326 c-1.447,0-2.598-1.151-2.598-2.6c0-1.416,1.15-2.599,2.598-2.599h110.482c1.446,0,2.602,1.183,2.602,2.599 c0,1.448-1.155,2.6-2.602,2.6H296.346z M347.686,338.473c-1.446,0-2.631-1.184-2.631-2.599c0-1.449,1.185-2.601,2.631-2.601 h98.765c1.417,0,2.602,1.151,2.602,2.601c0,1.415-1.185,2.599-2.602,2.599H347.686z M456.557,338.473 c-1.418,0-2.635-1.184-2.635-2.599c0-1.449,1.217-2.601,2.635-2.601h12.339c1.45,0,2.635,1.151,2.635,2.601 c0,1.415-1.185,2.599-2.635,2.599H456.557z M258.467,338.111c-1.447,0-2.599-1.186-2.599-2.633c0-1.416,1.151-2.6,2.599-2.6 h46.799c1.45,0,2.602,1.184,2.602,2.6c0,1.447-1.151,2.633-2.602,2.633H258.467z M422.854,178.891 c-0.131,1.416-1.381,2.468-2.828,2.336c-1.414-0.098-2.47-1.383-2.338-2.796l0.229-2.929l-37.156,37.155 c-0.986,0.988-2.663,0.988-3.683,0l-7.934-7.964l-30.012,30.015c-1.023,0.987-2.667,0.987-3.688,0l-14.084-14.085l-37.716,37.714 c-1.023,1.02-2.668,1.02-3.688,0s-1.02-2.665,0-3.686l39.558-39.559c1.022-1.02,2.667-1.02,3.686,0l14.086,14.085l30.017-30.013 c1.02-1.021,2.664-1.021,3.684,0l7.933,7.964l36.201-36.168l-4.573-0.165c-1.418-0.065-2.536-1.284-2.503-2.699 c0.066-1.448,1.285-2.567,2.699-2.501l10.268,0.362c0.725-0.033,1.447,0.231,2.006,0.758c0.629,0.625,0.859,1.513,0.694,2.337 L422.854,178.891z M244.118,203.146c-4.016-3.981-8.459-7.503-13.264-10.53l-6.942,12.045c-0.724,1.251-2.305,1.646-3.555,0.954 c-1.217-0.724-1.645-2.304-0.954-3.554l6.942-12.045c-9.708-5.2-20.732-8.294-32.479-8.689v13.888c0,1.448-1.155,2.6-2.569,2.6 c-1.447,0-2.635-1.151-2.635-2.6v-13.888c-11.713,0.395-22.738,3.489-32.479,8.689l6.975,12.045 c0.691,1.25,0.264,2.83-0.954,3.554c-1.25,0.692-2.864,0.297-3.588-0.954l-6.909-12.045c-4.838,3.027-9.249,6.549-13.264,10.53 c-3.983,4.016-7.538,8.458-10.533,13.263l12.046,6.944c1.217,0.724,1.645,2.304,0.955,3.554c-0.724,1.252-2.303,1.679-3.556,0.955 l-12.043-6.977c-5.2,9.741-8.295,20.8-8.689,32.515h13.888c1.414,0,2.602,1.151,2.602,2.6c0,1.416-1.188,2.6-2.602,2.6h-13.888 c0.394,11.717,3.489,22.741,8.689,32.482l12.043-6.977c1.253-0.69,2.832-0.264,3.556,0.954c0.69,1.251,0.263,2.831-0.955,3.555 l-12.046,6.944c2.995,4.837,6.55,9.28,10.533,13.262c4.016,3.982,8.426,7.538,13.264,10.532l6.909-12.045 c0.724-1.219,2.338-1.646,3.588-0.922c1.217,0.691,1.645,2.303,0.954,3.521l-6.975,12.045c9.741,5.199,20.766,8.294,32.479,8.688 v-13.888c0-1.416,1.188-2.6,2.635-2.6c1.414,0,2.569,1.184,2.569,2.6v13.888c11.747-0.395,22.771-3.489,32.479-8.688 l-6.942-12.045c-0.691-1.219-0.263-2.83,0.954-3.521c1.25-0.725,2.832-0.297,3.555,0.922l6.975,12.045 c4.772-2.994,9.249-6.55,13.231-10.532c3.982-3.981,7.505-8.425,10.533-13.262l-12.046-6.944 c-1.217-0.724-1.645-2.304-0.955-3.555c0.724-1.218,2.302-1.645,3.555-0.954l12.043,6.977c5.2-9.741,8.295-20.766,8.689-32.482 H252.05c-1.415,0-2.602-1.184-2.602-2.6c0-1.449,1.187-2.6,2.602-2.6h13.888c-0.395-11.715-3.489-22.774-8.689-32.515 l-12.043,6.977c-1.253,0.724-2.832,0.297-3.555-0.955c-0.69-1.25-0.263-2.83,0.955-3.554l12.046-6.944 c-2.963-4.771-6.485-9.183-10.402-13.132L244.118,203.146z"></path> </g> </g> <g id="Layer_1"></g> </g></svg>),
    description: "We provide regular reports and analytics to track performance, identify trends, and make data-driven improvements.",
  },
  {
    id: 5,
    title: "Uninterrupted Operations",
    icon: (<svg stroke="currentColor" width="57" height="57" fill="#ffffff" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style></style></defs><title>operations--field</title><rect x="16" y="6" width="10" height="2" transform="translate(14 28) rotate(-90)"></rect><rect x="20" y="6" width="10" height="2" transform="translate(18 32) rotate(-90)"></rect><rect x="24" y="6" width="10" height="2" transform="translate(22 36) rotate(-90)"></rect><path d="M16,20a3.9123,3.9123,0,0,1-4-4,3.9123,3.9123,0,0,1,4-4V10a6,6,0,1,0,6,6H20A3.9123,3.9123,0,0,1,16,20Z"></path><path d="M28.8928,18.4536,26.0979,16,24.78,17.5044l2.7922,2.4517-2.36,4.0878-3.4273-1.1591a9.0315,9.0315,0,0,1-2.7143,1.5644L18.36,28H13.64l-.71-3.5508a9.0953,9.0953,0,0,1-2.6948-1.5713l-3.4468,1.166-2.36-4.0878L7.1528,17.561a8.9263,8.9263,0,0,1-.007-3.1279L4.4275,12.0439,6.7886,7.9561l3.4267,1.1591a9.0305,9.0305,0,0,1,2.7141-1.5644L13.64,4H16V2H13.64a2,2,0,0,0-1.9611,1.6079l-.5037,2.5186A10.9666,10.9666,0,0,0,9.8481,6.88L7.4287,6.0615a1.9977,1.9977,0,0,0-2.3728.8946L2.6953,11.0439a2.0006,2.0006,0,0,0,.4119,2.5025l1.9309,1.6968C5.021,15.4946,5,15.7446,5,16c0,.2578.01.5127.0278.7656l-1.9206,1.688a2.0006,2.0006,0,0,0-.4119,2.5025l2.3606,4.0878a1.9977,1.9977,0,0,0,2.3728.8946l2.4341-.8233a10.9736,10.9736,0,0,0,1.312.7583l.5037,2.5186A2,2,0,0,0,13.64,30H18.36a2,2,0,0,0,1.9611-1.6079l.5037-2.5186a10.9666,10.9666,0,0,0,1.3267-.7534l2.4194.8184a1.9977,1.9977,0,0,0,2.3728-.8946l2.3606-4.0878A2.0006,2.0006,0,0,0,28.8928,18.4536Z"></path><rect id="_Transparent_Rectangle_" data-name="<Transparent Rectangle>" className="cls-1" width="32" height="32"></rect></g></svg>),
    description: "Our support services ensure uninterrupted operations, providing your customers with continuous assistance.",
  },
  {
    id: 6,
    title: "IT Setup and Maintenance",
    icon: (<svg stroke="currentColor" width="57" height="57" viewBox="0 0 64 64" data-name="Layer 1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title></title><rect height="5" width="20" x="33" y="44"></rect><rect height="5" width="25" x="2" y="57"></rect><circle cx="43.00598" cy="16" r="3"></circle><path d="M24,30H62V2H24ZM57,5h2V7H57ZM53,5h2V7H53ZM33.061,14.89423l3.2182-.87488a6.96112,6.96112,0,0,1,.56946-1.36566L35.18774,9.75458l1.56073-1.56073,2.89917,1.66083a6.95975,6.95975,0,0,1,1.36579-.56946L41.88837,6.067a10.04741,10.04741,0,0,1,2.2113.00006l.87488,3.21826a6.96043,6.96043,0,0,1,1.36572.5694l2.89911-1.66089,1.56073,1.56079-1.66083,2.89911a6.95988,6.95988,0,0,1,.5694,1.36572l3.21826.87494a10.05055,10.05055,0,0,1,.00006,2.21124v.00018l-3.21832.87488a6.96088,6.96088,0,0,1-.5694,1.36566l1.66083,2.89905-1.56073,1.56079-2.89911-1.66083a6.95578,6.95578,0,0,1-1.36578.5694L44.09955,25.933l-.00031.00006a10.04837,10.04837,0,0,1-2.211-.00006l-.87487-3.21826a6.959,6.959,0,0,1-1.36573-.5694l-2.89917,1.66083-1.56066-1.56073,1.66082-2.89911a6.96214,6.96214,0,0,1-.56946-1.36578l-3.2182-.875A10.056,10.056,0,0,1,33.061,14.89423Z"></path><path d="M15,28A11,11,0,1,0,26,39,11,11,0,0,0,15,28Zm0,14a3,3,0,1,1,3-3A3,3,0,0,1,15,42Z"></path><rect height="7" width="2" x="3" y="48"></rect><rect height="7" width="2" x="24" y="48"></rect><rect height="4" width="2" x="20" y="51"></rect><rect height="4" width="2" x="7" y="51"></rect><rect height="2" width="2" x="11" y="53"></rect><rect height="2" width="2" x="16" y="53"></rect><path d="M54.17157,51.34314l-.4967.4967,2.48425,2.46589,3.28033-3.28034A3.987,3.987,0,0,0,54.17157,51.34314Z"></path><path d="M56.86884,55.01007l2.48394,2.46558L59.82843,57a3.987,3.987,0,0,0,.318-5.26752Z"></path><path d="M51.34314,54.17157A4,4,0,0,0,57,59.82843l1.59705-1.597-5.67792-5.6358Z"></path><rect height="8" width="5" x="41" y="35"></rect><path d="M24,31.08936a12.02435,12.02435,0,0,1,1.81836,2.75274H62V31H24Z"></path></g></svg>),
    description: "We handle all IT setup and maintenance, so you can focus on your core business activities without worrying about technical issues.",
  }
];

export default supportCycleUnits;
