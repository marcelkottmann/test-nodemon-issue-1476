console.log("Program has started.")

process.on("SIGUSR2", function () {
    console.log("Shutdown takes 5 seconds...");
    setTimeout(() => process.exit(0), 5000);
});

// keep program running
setInterval(() => { }, 1000);
