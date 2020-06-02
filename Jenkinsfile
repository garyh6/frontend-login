pipeline {
  agent {
    docker {
      image 'node:10'
      args '-p 5000:5000'
    }
  }
  environment {
      CI = 'true'
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
          sh './jenkins/scripts/test.sh'
      }
    }
  }
}