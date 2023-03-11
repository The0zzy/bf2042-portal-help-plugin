(function () {
  const pluginId = "bf2042-portal-help-plugin";
  const plugin = BF2042Portal.Plugins.getPlugin(pluginId);

  const toggleHelpItem = {
    displayText: "Toggle Help",
    preconditionFn: () => "enabled",
    callback: function () {
      helpButton = document.querySelector("div.blockly-help");
      if (helpButton.style.display == "none") {
        helpButton.style.display = "block";
        logInfo("Made help menu visible");
      } else {
        helpButton.style.display = "none";
        logInfo("Made help menu hidden");
      }
    },
    scopeType: _Blockly.ContextMenuRegistry.ScopeType.WORKSPACE,
    id: "toggleHelpItem",
    weight: 190,
  };

  plugin.initializeWorkspace = function () {
    logInfo("Initializing...");
    try {
      _Blockly.ContextMenuRegistry.registry.register(toggleHelpItem);
      logInfo("Initialized!");
    }catch(exception){
        logError("Failed to initialize!", exception);
    }
  };

  function getLogPrefix(messageType){
    const messagePrefix = "[" + pluginId + "] [" + messageType + "] - ";
  }

  function logInfo(message) {
    console.info(getLogPrefix("INFO") + message);
  }

  function logInfo(message, data) {
    console.info(getLogPrefix("INFO") + message, data);
  }

  function logWarning(message) {
    console.error(getLogPrefix("WARNING") + message);
  }

  function logWarning(message, data) {
    console.warn(getLogPrefix("WARNING") + message, data);
  }

  function logError(message) {
    console.error(getLogPrefix("ERROR") + message);
  }

  function logError(message, data) {
    console.error(getLogPrefix("ERROR") + message, data);
  }
})();
