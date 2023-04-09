// sort each repo by date, choose 4 with the dates that are the earliest

async function contactAPI(targetUrl:string) {
    const response = await fetch(targetUrl);
    const data = await response.json();

    // consolidate important information and sort latest github repo by date
    const infoArray:any[] = [];
    interface RepoInfo {
        repoName:string;
        repoUrl:string;
        repoLastCommitPushedDate:string;
        repoLastCommitPushedTime:string;
        repoDescription:string;
        repoLanguages:string
    }

    for (var repo of data) {
        let givenRepo:RepoInfo = {
            repoName: repo.name,
            repoUrl: repo.svn_url,
            repoLastCommitPushedDate: repo.pushed_at.split("T")[0],
            repoLastCommitPushedTime: repo.pushed_at.split("T")[1].split("Z")[0],
            repoDescription: repo.description,
            repoLanguages: repo.language
        }

        infoArray.push(givenRepo);
        //console.log(`${repoName}\n${repoUrl}\n${repoLastCommitPushedDate}\n${repoLastCommitPushedTime}\n${repoDescription}\n${repoLanguages}`);
        //console.log(givenRepo.repoName);
        //console.log("------");
    }
    console.log(infoArray);
    console.log(`${data.length} public repos total`);
}

contactAPI("https://api.github.com/users/gongahkia/repos");
