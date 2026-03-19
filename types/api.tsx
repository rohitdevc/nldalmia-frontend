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

export interface Ticker {
    ticker_caption: string;
    ticker_end_time: string;
    ticker_link_caption: string;
    ticker_link: string;
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
    intro_link: string;
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

export interface HomeEvents {
    event_category_name: string;
    event_name: string;
    event_start_date: string;
    event_url_slug: string;
    event_thumbnail: string;
    event_description: string;
}

export interface HomeAwards {
    award_name: string;
    award_year: string;
    award_thumbnail: string;
}

export interface HomeMedia {
    media_title: string;
    media_preview: string;
    media_published_date: string;
    media_link: string;
    media_youtube_id: string;
    media_thumbnail: string;
    media_attachment: string;
}

export interface HomeBlog {
    blog_title: string;
    blog_preview: string;
    blog_published_date: string;
    blog_thumbnail: string;
    blog_url_slug: string;
    blog_author_name: string;
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

export interface Objectives {
    objective_caption: string;
    objective_description: string;
}

export interface Timeline {
    timeline_year: string;
    timeline_caption: string;
    timeline_description: string;
    timeline_image: string;
}

export interface FounderQuote {
    founder_quote_title: string;
    founder_quote: string;
    founder_bio: string;
    founder_name: string;
    founder_image: string;
}

export interface ManagementQuote {
    management_caption: string;
    management_quote: string;
    management_thumbnail: string;
    management_profile_link: string;
}

export interface ManagingCouncil {
    managing_council_name: string;
    managing_council_designation: string;
    managing_council_thumbnail: string;
    managing_council_profile_link: string;
}

export interface GoverningCouncil {
    governing_council_name: string;
    governing_council_designation: string;
    governing_council_thumbnail: string;
    governing_council_profile_link: string;
}

export interface InternationalUniversities {
    international_university_country_name: string;
    international_university_name: string;
    international_university_caption: string;
    international_university_description: string;
    international_university_logo: string;
}

export interface AdmissionPrograms {
    program_name: string;
    program_description: string;
    program_application_link: string;
    program_application_end_date: string;
    program_link: string;
}

export interface AdmissionProcessInformation {
    information_category_title: string;
    information_caption: string;
    information_description: string;
}

export interface FinancialPartner {
    partner_name: string;
    partner_pdf: string;
    partner_logo: string;
}

export interface FAQs {
    faq_category_title: string;
    faq_question: string;
    faq_answer: string;
}

export interface WallOfFame {
    wall_of_fame_name: string;
    wall_of_fame_description: string;
    wall_of_fame_thumbnail: string;
    wall_of_fame_batch_year: string;
    wall_of_fame_company_name: string;
    wall_of_fame_designation: string;
}

export interface AlumniSlider {
    slider_caption: string;
    slider_description: string;
}

export interface AlumniMeet {
    meet_caption: string;
    meet_description: string;
    meet_date: string;
    meet_link: string;
}

export interface AlumniQuotes {
    quote_text: string;
    quote_name: string;
    quote_date: string;
    quote_link: string;
    quote_thumbnail: string;
    quote_pdf: string;
}

export interface AlumniConnect {
    connect_name: string;
    connect_description: string;
    connect_thumbnail: string;
    connect_designation: string;
    connect_degree_year: string;
    connect_areas_of_expertise: string;
    connect_email_address: string;
    connect_courses: string;
    connect_phone_number: string;
    connect_linked_in_url: string;
    connect_instagram_url: string;
    connect_twitter_url: string;
}

export interface AlumniHallOfFame {
    hall_of_fame_name: string;
    hall_of_fame_description: string;
    hall_of_fame_thumbnail: string;
    hall_of_fame_designation: string;
    hall_of_fame_degree_year: string;
    hall_of_fame_areas_of_expertise: string;
    hall_of_fame_email_address: string;
    hall_of_fame_courses: string;
    hall_of_fame_phone_number: string;
    hall_of_fame_linked_in_url: string;
    hall_of_fame_instagram_url: string;
    hall_of_fame_twitter_url: string;
}

export interface AlumniTestimonials {
    testimonial_name: string;
    testimonial_content: string;
    testimonial_bio: string;
    testimonial_designation: string;
    testimonial_thumbnail: string;
}

export interface AlumniEvents {
    event_title: string;
    event_description: string;
    event_start_date: string;
    event_link: string;
    event_thumbnail: string;
    event_location: string;
}

export interface Awards {
    award_name: string;
    award_description: string;
    award_year: number;
    award_thumbnail: string;
}

export interface BlogCategories {
    blog_category_title: string;
    blog_category_url_slug: string;
}

export interface BlogListing {
    blog_title: string;
    blog_preview: string;
    blog_category_name: string;
    blog_category_url_slug: string;
    blog_published_date: string;
    blog_thumbnail: string;
    blog_url_slug: string;
}