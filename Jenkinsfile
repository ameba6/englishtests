pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }

  }
  stages {
    stage('error') {
      steps {
        sh 'git checkout Jenkins'
      }
    }
  }
}