import { MethodConfig, Files, Method, Verbs, MethodError, MethodResult, MethodConfigExtend } from '@methodus/server';
import { LibraryModel } from '../models/library.model';
import * as aws from 'aws-sdk';
import { AuthMiddleware } from './auth.middleware';
/*start custom*/
import { DataController } from './datacontroller';
/*end custom*/
const S3_BUCKET = process.env.S3_BUCKET;

@MethodConfig('LibraryDataController', [AuthMiddleware], LibraryModel)
@MethodConfigExtend(DataController)
export class LibraryDataController extends DataController {

    @Method(Verbs.Post, '/upload')
    public static async capture(@Files() files: any, actionGuid: string): Promise<MethodResult<any>> {

        if (!Files) {
            throw (new MethodError('no data'));
        }


        // const dateKey = moment().format("MM_YYYY");
        // const persist_filename = actionGuid + ".jpg";
        // const s3Params = {
        //     ACL: 'public-read',
        //     Bucket: S3_BUCKET,
        //     ContentType: 'image/jpg',
        //     Expires: 60,
        //     Key: persist_filename,
        // };
        // s3.getSignedUrl('putObject', s3Params, (err: any, data: any) => {
        //     const returnData = {
        //         signedRequest: data,
        //         url: `https://${S3_BUCKET}.s3.amazonaws.com/${persist_filename}`
        //     };

        //     var s3obj = new aws.S3({ params: { Bucket: 'juntas', Key: dateKey + '/' + fileName } });
        //     s3obj.upload({ Body: fs.createReadStream(finalFile) }).
        //         on('httpUploadProgress', function (evt:any) {
        //             console.log(evt);
        //         }).
        //         send(function (err:any, data:any) {
        //             console.log(err, data)
        //         });


        // });



        // var options = {
        //     streamType: 'jpg',
        //     renderDelay: 3000,
        //     screenSize: {
        //         width: 1024,
        //         height: 768
        //     }
        //     , shotSize: {
        //         width: 'window',
        //         height: 'window'
        //     }, zoomFactor: 1,
        //     userAgent: 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/53.0.2785.116 Safari/537.36'
        // }

        // var imagetTempPath = path.join('temp', dateKey, actionGuid + "_tmp.jpg");
        // webshot(data.Url, imagetTempPath, options, (err: any, data: any) => {
        //     if (err !== null)
        //         return;
        //     thumbler.upload_s3(imagetTempPath, dateKey, actionGuid + '.jpg', "image/jpg", data).then(function () {
        //         console.log('all is well');
        //     }).catch(function (error: any) {
        //     });
        // });
        return;
    }

}
