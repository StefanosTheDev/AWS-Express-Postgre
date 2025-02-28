#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { MvpStack } from '../lib/awsinfra-stack'; // Adjust the path to your stack file

const app = new cdk.App();
new MvpStack(app, 'MvpStack', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: process.env.CDK_DEFAULT_REGION,
  },
});
