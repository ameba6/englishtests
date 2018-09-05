pipeline {
  agent {
    docker {
      image 'goforgold/build-container'
    }

  }
  stages {
    stage('error') {
      steps {
        echo 'Step 1'
      }
    }
  }
}