import { model, Schema, Document } from 'mongoose';

// Define interface for the data
interface IEvent extends Document {
  id: number;
  title: string;
  description: string;
  type: string;
  duration: number;
  date: Date;
}

// Create Mongoose schema for the data
const eventSchema = new Schema<IEvent>(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    type: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
  },
  { versionKey: false },
);

// Create Mongoose model for the data
const EventModel = model<IEvent>('event', eventSchema);

export default EventModel;
