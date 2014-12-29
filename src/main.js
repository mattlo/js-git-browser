window.repo = {};

jsgit.bindTo(repo);

// sample commit
repo.saveAs("blob", "Hello World\n", function (err, blobHash) {
	repo.saveAs("tree", {
		"greeting.txt": { mode: modes.file, hash: blobHash }
	}, function (err, treeHash) {
		repo.saveAs("commit", {
			author: {
				name: "Tim Caswell",
				email: "tim@creationix.com"
			},
			tree: treeHash,
			message: "Test commit\n"
		}, function (err, commitHash) {
			console.log(commitHash);
		});
	});
});

