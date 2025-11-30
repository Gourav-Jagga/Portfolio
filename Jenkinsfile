pipeline {
  agent any
  environment {
    IMAGE_NAME = "Portfolio"
    TAG = "latest"
    BUILD_DIR = "build_output"
  }
  stages {
    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build inside node container') {
      steps {
        sh '''
          rm -rf ${BUILD_DIR}
          docker run --rm -v $PWD:/work -w /work node:18-alpine sh -c "npm ci && npm run build"
        '''
      }
    }

    stage('Build Docker image') {
      steps {
        sh "docker build -t ${IMAGE_NAME}:${TAG} ."
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker stop react_app_container || true
          docker rm -f react_app_container || true
          docker run -d --name react_app_container -p 80:80 ${IMAGE_NAME}:${TAG}
        '''
      }
    }
  }
}
