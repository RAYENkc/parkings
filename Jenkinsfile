pipeline {
    agent any
    environment {
            CI = 'true'
        }
    stages {
        stage('SCM PROJECT') {
            steps {
                sh '*/1 * * * *'
            }
        }
        stage('BUILD') {
            steps {
                sh 'npm install'
                sleep(3)
            }
        }
        stage('UNIT TEST') {
            steps {
                echo 'TEST PHASE IN PROGRESS'
                sleep(3)
            }
        }
        stage('PACKAGE & DEPLOY') {
            steps {
                echo 'PACKAGING and DEPLOYMENT IN PROGRESS'
                sleep(3)
            }
        }
        stage('UI TEST') {
            steps {
                echo 'POST DEPLOYMENT TEST PHASE IN PROGRESS'
                sleep(3)
            }
        }
        stage('ARCHIVE') {
            steps {
                echo 'ARCHIVING PHASE IN PROGRESS'
                sleep(3)
            }
        }
    }
}
