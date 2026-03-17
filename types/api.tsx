export interface MetaData {
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface Banner {
    banner_image: string;
    banner_caption: string;
    banner_description: string;
    banner_vimeo_video_id: string;
    button_caption: string;
    button_link: string;
}

export interface TokenResponse {
  token: string;
}

export interface IntroProps {
    intro_title: string;
    intro_caption: string;
    intro_description: string;
    intro_image: string;
    intro_pdf: string;
    intro_video_id: string;
}

export interface CareerFinderProps {
    career_finder_title: string;
    career_finder_caption: string;
    career_finder_image: string;
}

export interface CareerPathProps {
    career_path_title: string;
}

export interface ProgramsProps {
    program_name: string;
    program_type: string;
    program_link: string;
    program_description: string;
    program_thumbnail: string;
    program_application_link: string;
}

export interface VideoSection {
    video_title: string;
    video_id: string;
    video_background_image: string;
}

export interface PlacementPartners {
    placement_partner_name: string;
    placement_partner_logo: string;
}

export interface HomeTestimonials {
    testimonial_name: string;
    testimonial_designation: string;
    testimonial_description: string;
    testimonial_youtube_id: string;
    testimonial_thumbnail: string;
}

export interface MediaCategory {
    media_category_title: string;
    banner_image: string;
    banner_image_caption: string;
    banner_image_description: string;
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface Blog {
    blog_title: string;
    blog_published_date: string;
    blog_content: string;
    blog_author_name: string;
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
    og_image: string;
    banner_image: string;
}

export interface Event {
    event_name: string;
    event_introduction_caption: string;
    event_introduction_description: string;
    event_introduction_image: string;
    event_milestone_title: string;
    event_milestone_caption: string;
    event_milestone_description: string;
    event_milestones: [Object];
    event_schedule_caption: string;
    event_schedule_description: string;
    event_schedules: [Object];
    event_competition_title: string;
    event_competition_caption: string;
    event_competition_description: string;
    event_competitions: [Object];
    event_slider_title: string;
    event_slider_caption: string;
    event_slider_description: string;
    event_sliders: [Object];
    event_reward_title: string;
    event_reward_caption: string;
    event_reward_description: string;
    event_rewards: [Object];
    event_sponser_caption: string;
    event_sponser_description: string;
    event_sponsers: [Object];
    event_second_slider_title: string;
    event_second_slider_caption: string;
    event_second_slider_description: string;
    event_second_sliders: [Object];
    event_testimonial_title: string;
    event_testimonial_caption: string;
    event_testimonial_description: string;
    event_testimonials: [Object];
    event_faq_title: string;
    event_faq_caption: string;
    event_faq_description: string;
    event_faqs: [Object];
    event_footer_section_caption: string;
    event_footer_section_description: string;
    event_registration_link: string;
    event_footer_section_image: string;
    og_image: string;
    banner_image: string;
    banner_image_caption: string;
    banner_image_description: string;
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface Faculty {
    faculty_name: string;
    faculty_thumbnail: string;
    faculty_designation: string;
    faculty_areas_of_expertise: string;
    faculty_courses: string;
    faculty_email_address: string;
    faculty_linkedin_url: string;
    faculty_accordians: [Object];
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface Program {
    program_name: string;
    program_introduction_caption: string;
    program_introduction_description: string;
    program_sliders: [Object];
    program_highlights: [string];
    program_highlights_image: string;
    program_credit_title: string;
    program_credit_caption: string;
    program_credit_description: string;
    program_credit_content: string;
    program_international_partner_caption: string;
    program_international_partner_description: string;
    program_international_partners: [Object];
    program_outcomes: [Object];
    program_advantage_image: string;
    program_advantages: [Object];
    program_application_title: string;
    program_application_caption: string;
    program_application_description: string;
    program_admissions: [Object];
    program_second_slider_caption: string;
    program_second_slider_description: string;
    program_second_sliders: [Object];
    program_testimonial_title: string;
    program_testimonial_caption: string;
    program_testimonial_description: string;
    program_testimonials: [Object];
    program_footer_section_image: string;
    program_footer_section_caption: string;
    program_footer_section_description: string;
    program_application_link: string;
    og_image: string;
    banner_image: string;
    banner_image_caption: string;
    banner_image_description: string;
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}