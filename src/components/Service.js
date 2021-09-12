import React, { Component } from 'react';
import body_care from '../images/body-care.jpg';
import facial_care from '../images/facial-care.jpg';

class Service extends Component {
    render() {
        return (
            <div className="text-center">
                <br />
                <h1>Harmonia Wellness Clinic Services</h1>
                <p>Try a Professional Massage with our Licensed, Certified and Registered Massage Therapists.</p>
                <p>We are proud Members of Natural Health Practitioners of Canada Association</p>
                <br />
                <img src={body_care} alt="body_care" />
                <br />
                <h2>body care</h2>
                <br />
                <h5>Royal Meridian Massage</h5>
                <h6>60min $100 / 90min $140</h6>
                <p>First, rigorous massage is performed centered around the spinal cord. Then, depending on the result, a follow up massage is given to the affected peripherals and abdomen area. Immediate relief can be felt for muscle ache, stress related fatigue and general prostration. This is a very unique Oriental massage technique offered exclusively by Harmonia Wellness.</p>
                <br /><br />
                <h5>Abdomen Area Care</h5>
                <h6>60min $100</h6>
                <p>Royal Meridian + RF treatment. Abdomen area Slimming, Cleaning and Comforting Your Organs</p>
                <br /><br />
                <h5>Lower body Care</h5>
                <h6>60min $100</h6>
                <p>Royal Meridian + RF treatment. Cellulite Reduction, Shaping and Slimming, Lymphatic drainage</p>
                <br /><br />
                <h5>Aroma Massage, Swedish Relaxation Massage</h5>
                <h6>60min $100 / 90min $140</h6>
                <p>Full Body Aroma Massage or Swedish Relaxation Massage. A great massage to increase muscle flexibility and reduce stress. The most comfortable and relaxing massage you will experience.</p>
                <br /><br />
                <h5>Pregnancy and New Mom Care</h5>
                <h6>60min $100</h6>
                <p>Reduce normal discomfort experienced during the pregnancy</p>
                <br /><br />
                <h5>Baby and Children Massage</h5>
                <h6>30min $50 / 60min $100</h6>
                <p>Gentle rhythmic touch for comforting baby and children</p>
                <br /><br />
                <img src={facial_care} alt="facial_care" />
                <br />
                <h2>Facial Care - Acupuncture Pressure Point Face Lift Massage</h2>
                <br />
                <h5>Anti-Aging</h5>
                <h6>60min $90</h6>
                <p>reduce wrinkles + RF treatment + special ampule + collagen treatment + anti-aging mask</p>
                <br /><br />
                <h5>Acne Care</h5>
                <h6>60min $90</h6>
                <p>specific cleansing & peeling for acne skin type + lymphatic drainage massage + acne care mask</p>
                <br /><br />
                <h5>Brightening</h5>
                <h6>60min $90</h6>
                <p>peeling + vitamin product treatment + special ampule + vitamin c mask</p>
                <br /><br />
                <h6>All facial care are combined with peeling, vitamin care, ultra sound and RF treatment.</h6>
                <br /><br />
                <h2>Consultation</h2>
                <p>We advise suitable exercises, self-care, and healthy diet plan depending on what clients need</p>
                <br /><br />
                <h2>Infra Red Sauna</h2>
                <h6>30min $20</h6>
                <p>Combined with Diet Oil, Arthritis Cream and Pain Relief Cream for best results</p>
            </div>
        );
    }
}

export default Service;