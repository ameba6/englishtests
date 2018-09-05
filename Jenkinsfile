pipeline {
  agent {
    docker {
      image 'goforgold/build-container'
    }

  }
  stages {
    stage('error') {
      steps {
        sleep(unit: 'SECONDS', time: 10)
      }
    }
  }
}