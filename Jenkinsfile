pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }

  }
  stages {
    stage('') {
      steps {
        git(url: 'https://github.com/cortesa/englishtests.git', branch: 'Jenkins')
      }
    }
  }
}