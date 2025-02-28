import * as cdk from 'aws-cdk-lib';
import * as ecr from 'aws-cdk-lib/aws-ecr';
import { Construct } from 'constructs';

export class MvpStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // Import the existing ECR repository
    const repo = ecr.Repository.fromRepositoryName(
      this,
      'AppRepo',
      'myapp-repo'
    );

    // Output the ECR repository URI
    new cdk.CfnOutput(this, 'RepositoryUri', {
      value: repo.repositoryUri,
      description: 'URI of the ECR repository',
    });
  }
}
