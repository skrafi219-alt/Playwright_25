pipeline{
    agent any

    stages{

        stage('checkout scm'){
            steps{
                checkout scm
            }
        }

        stage('Install Dependencies'){
            steps{
                bat 'npm ci'
            }
        }

        stage('Install playwright browsers'){
            steps{
                bat 'npx playwright install'
            }
        }

        stage('Run playwright tests'){
            steps{
                bat 'npx playwright test'
            }
        }
    }
}