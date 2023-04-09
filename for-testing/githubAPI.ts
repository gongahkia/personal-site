// figure out how to use API calls 

async function contactAPI(targetUrl:string) {
    const response = await fetch(targetUrl);
    const data = await response.json();
    
    for (var repo of data) {
        let repoName:string = repo.name;
        let repoUrl:string = repo.svn_url;
        let repoLastCommitPushedDate:string = repo.pushed_at.split("T")[0];
        let repoLastCommitPushedTime:string = repo.pushed_at.split("T")[1].split("Z")[0];
        let repoDescription:string = repo.description;
        let repoLanguages:string = repo.language;
        console.log(`${repoName}\n${repoUrl}\n${repoLastCommitPushedDate}\n${repoLastCommitPushedTime}\n${repoDescription}\n${repoLanguages}`);
        console.log("------");
    }

    console.log(`${data.length} public repos total`);
}

contactAPI("https://api.github.com/users/gongahkia/repos");


