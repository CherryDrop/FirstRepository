// import aws from 'aws-sdk';
import AWS from 'aws-sdk';
import crypto from 'crypto';

const s3 = new AWS.S3({
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
    signatureVersion: 'v4',
})

export async function getSignedPutObjectUrl(extension: string): Promise<string> {
    let url: string;
    const imageUUID = crypto.randomUUID();

    try {
        const params = {
            Bucket: process.env.AWS_BUCKET_NAME,
            Key: imageUUID + "." + extension,
            Expires: 60,
        }

        url = await s3.getSignedUrlPromise('putObject', params)
    } catch (error) {
        throw new Error(error);
    }

    return url;
}