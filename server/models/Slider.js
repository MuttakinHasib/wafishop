import mongoose from 'mongoose';

const sliderSchema = new mongoose.Schema({
  images: {
    type: Array,
    default: []
  },
});

const Slider = mongoose.models.slider || mongoose.model('slider', sliderSchema);

export default Slider;
