pipeline {
    agent any

    stages {
        stage('build') {
            steps {
                echo 'Build'
                echo 'Hello World'
            }}
        stage('Test') {
            steps {
                echo 'Test'
                echo 'Testing is complete'
            }}
        stage('Deploy') {
            steps {
                echo 'Starting the deployment'
                echo 'Deployment is done'
            }
        }
    }
}