pipeline {
  agent {
    dockerfile {
      filename 'dockerfile'
    }
  }
  environment {
      CI = 'true'
  }
  stage('Test') {
      steps {
          sh './jenkins/scripts/test.sh'
      }
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }

  }
}