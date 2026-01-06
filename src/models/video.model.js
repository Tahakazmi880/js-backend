import mongoose, { Schema } from "mongoose";

import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
    {

        videoFile: {
            type: String,
            reqyired: true
        },
        thumbnail: {
            type: String,
            reqyired: true
        },
        description: {
            type: String,
            reqyired: true
        },
        title: {
            type: String,
            reqyired: true
        },
        duration: {
            type: Number,
            reqyired: true
        },
        views: {
            type: String,
            default:0
        },
        isPublished: {
            type: String,
            reqyired: true
        },
        owner:{
            type:Schema.Types.ObjectId,
            ref:"User"
        }


    },
    {
        timestamps: true
    }
)

videoSchema.plugin(mongooseAggregatePaginate);

export const Video = mongoose.model("Video", videoSchema);
 