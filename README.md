First of all, please setup:

    npm install


Steps to reproduce issue #1476:

    npm run exec


Steps to test the fix:
    
* Clone the fix-repository: `git clone git@github.com:pepe79/nodemon.git`
* run `npm link` inside fix-repository
* cd into `test-nodemon-issue-1476`
* run `npm link nodemon`

and then re-run the test from above:

    npm run exec
    
