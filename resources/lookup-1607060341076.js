(function(window, undefined) {
  var dictionary = {
    "0b0245c2-1174-49d6-9b51-f992b286062f": "Skill Gap Analysis",
    "7797d693-fc87-45be-ae41-965ca3edf59b": "User Detailes - Unfilled",
    "94fe5d27-2f3a-4efc-a455-7317228c45dd": "Course",
    "88fe9784-a76b-45df-a48d-419a5ac37ae3": "User Profile",
    "e7f26a45-d7eb-4004-b178-cec770dbea52": "Aptitude test",
    "49c4a3d5-76f5-40c0-8c94-4baef2e06a3a": "Registration page",
    "24712580-a8e2-4bf4-87c5-7395dd4dae74": "Job Results",
    "61c78fa3-e455-40be-9cfd-bcf3e3e706f5": "Home page",
    "bd4fd8ae-1793-4f58-a222-cf1f0cf6467f": "User Skill set",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Log In page",
    "28004019-5822-49d1-acbf-3b6102a5e367": "User Detailes - Filled",
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