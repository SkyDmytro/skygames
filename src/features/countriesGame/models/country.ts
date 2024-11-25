// models/Country.js
import mongoose from 'mongoose';

const CountrySchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  id: {
    type: Number,
    required: true,
    unique: true,
  },
  countryName: {
    type: String,
    required: true,
  },
});

export default mongoose.models.Country ||
  mongoose.model('Country', CountrySchema);
