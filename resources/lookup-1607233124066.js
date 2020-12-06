(function(window, undefined) {
  var dictionary = {
    "7797d693-fc87-45be-ae41-965ca3edf59b": "User Detailes - Unfilled",
    "733fa1d9-a22d-4971-811c-472b8684488b": "Progression Report",
    "94fe5d27-2f3a-4efc-a455-7317228c45dd": "Course",
    "e37e65f6-fe67-40f3-b210-749307f3c101": "Labour Market Analysis",
    "28004019-5822-49d1-acbf-3b6102a5e367": "User Detailes - Filled",
    "e8ac5790-1abe-436b-a2d5-5637acd2745f": "Jobs and skills in demand",
    "0b0245c2-1174-49d6-9b51-f992b286062f": "Skill Gap Analysis Results",
    "88fe9784-a76b-45df-a48d-419a5ac37ae3": "User Profile",
    "e7f26a45-d7eb-4004-b178-cec770dbea52": "Aptitude test",
    "49c4a3d5-76f5-40c0-8c94-4baef2e06a3a": "Registration page",
    "24712580-a8e2-4bf4-87c5-7395dd4dae74": "Job Results",
    "61c78fa3-e455-40be-9cfd-bcf3e3e706f5": "Skill Gap Analysis",
    "486304b1-0c4f-447d-930c-782a62de6f7b": "About Us",
    "a1f1d655-27cd-4d85-bf29-b567712eff40": "Technical skill test",
    "7dfe5cef-3508-4db2-80fc-772077abbe0c": "Home Page",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Log In page",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);