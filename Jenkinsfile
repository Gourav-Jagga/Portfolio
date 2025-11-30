pipeline {
  agent any

  environment {
    IMAGE_NAME = "portfolio"  
    TAG = "latest"
  }

  stages {

    stage('Checkout') {
      steps {
        checkout scm
      }
    }

    stage('Build (Node 20)') {
      steps {
        sh '''
          docker run --rm \
            -v $PWD:/work \
            -w /work \
            node:20-alpine \
            sh -c "npm ci && npm run build"
        '''
      }
    }

    stage('Build Docker Image') {
      steps {
        sh "docker build -t ${IMAGE_NAME}:${TAG} ."
      }
    }

    stage('Deploy') {
      steps {
        sh '''
          docker stop portfolio_container || true
          docker rm -f portfolio_container || true

          docker run -d \
            --name portfolio_container \
            -p 80:80 \
            portfolio:latest
        '''
      }
    }
  }

  post {
    success {
      echo "✔️ Deployment complete at http://localhost:80"
    }
  }
}
