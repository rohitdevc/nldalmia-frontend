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

export interface MediaCategoryListing {
    media_category_title: string;
    media_category_url_slug: string;
}

export interface Media {
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

type EventMilestone = {
    event_milestone_caption: string;
    event_milestone_description: string;
}

type EventScheduleData = {
    event_schedule_caption: string;
    event_schedule_time: string;
    event_schedule_description: string;
}

type EventSchedule = {
    event_schedule_date: string;
    event_schedule_data: EventScheduleData[]
}

type EventCompetition = {
    event_competition_caption: string;
    event_competition_description: string;
    event_competition_image: string;
}

type EventSliders = {
    event_slider_caption: string;
    event_slider_image: string;
}

type EventRewards = {
    event_reward_caption: string;
    event_reward_description: string;
}

type EventSponser = {
    event_sponser_name: string;
    event_sponser_logo: string;
}

type EventTestimonials = {
    event_testimonial_name: string;
    event_testimonial_designation: string;
    event_testimonial_about: string;
    event_testimonial_content: string;
    event_testimonial_image: string;
}

type EventFAQTabs = {
    event_faq_question: string;
    event_faq_answer: string;
}

type EventFAQs = {
    event_faq_tab_title: string;
    event_faq_tabs: EventFAQTabs[]
}

export interface Event {
    event_name: string;
    event_introduction_caption: string;
    event_introduction_description: string;
    event_introduction_image: string;
    event_milestone_title: string;
    event_milestone_caption: string;
    event_milestone_description: string;
    event_milestones: EventMilestone[];
    event_schedule_caption: string;
    event_schedule_description: string;
    event_schedules: EventSchedule[];
    event_competition_title: string;
    event_competition_caption: string;
    event_competition_description: string;
    event_competitions: EventCompetition[];
    event_slider_title: string;
    event_slider_caption: string;
    event_slider_description: string;
    event_sliders: EventSliders[];
    event_reward_title: string;
    event_reward_caption: string;
    event_reward_description: string;
    event_rewards: EventRewards[];
    event_sponser_caption: string;
    event_sponser_description: string;
    event_sponsers: EventSponser[];
    event_second_slider_title: string;
    event_second_slider_caption: string;
    event_second_slider_description: string;
    event_second_sliders: EventSliders[];
    event_testimonial_title: string;
    event_testimonial_caption: string;
    event_testimonial_description: string;
    event_testimonials: EventTestimonials[];
    event_faq_title: string;
    event_faq_caption: string;
    event_faq_description: string;
    event_faqs: EventFAQs[];
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

type FacultyAccordian = {
    faculty_accordian_caption: string;
    faculty_accordian_description: string;
}

export interface Faculty {
    faculty_name: string;
    faculty_thumbnail: string;
    faculty_designation: string;
    faculty_areas_of_expertise: string;
    faculty_courses: string;
    faculty_email_address: string;
    faculty_linkedin_url: string;
    faculty_accordians: FacultyAccordian[];
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface Faculties {
    faculty_name: string;
    faculty_url_slug: string;
    faculty_department: string;
    faculty_designation: string;
    faculty_thumbnail: string;
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

export interface Slider {
    slider_image: string;
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

export interface CareersOurValues {
    our_value_title: string;
    our_value_icon: string;
}

export interface CareerMilestones {
    milestone_title: string;
    milestone_description: string;
}

export interface CareersAchievements {
    achievement_title: string;
    achievement_caption: string;
    achievement_image: string;
}

export interface CareersVacancies {
    vacancy_title: string;
    vacancy_preview: string;
    vacancy_description: string;
    vacancy_department: string;
    vacancy_experience_required: string;
    vacancy_location: string;
}

export interface CareersApplication {
    application_title: string;
    application_description: string;
}

export interface Events {
    event_name: string;
    event_start_date: string;
    event_end_date: string;
    event_url_slug: string;
    event_registration_link: string;
    event_thumbnail: string;
    event_description: string;
    event_report: string;
}

export interface BookChapters {
    book_chapter_title: string;
    book_chapter_author: string;
    book_chapter_date: string;
    book_chapter_link: string;
    book_chapter_thumbnail: string;
}

export interface JournalPublications {
    journal_publication_title: string;
    journal_publication_caption: string;
    journal_publication_description: string;
    journal_publication_date: Date;
    journal_publication_link: string;
    journal_publication_authors: string;
}

export interface FinancialAssistancePartners {
    partner_name: string;
    partner_pdf: string;
    partner_logo: string;
}

export interface InstitutionalPublicationCategories {
    institutional_publication_category_title: string;
    institutional_publication_description: string;
}

export interface InstitutionalPublications {
    institutional_publication_category_title: string;
    institutional_publication_title: string;
    institutional_publication_caption: string;
    institutional_publication_published_date: string;
    institutional_publication_pdf: string;
    institutional_publication_thumbnail: string;
}

export type IQACCategories = string[]

export interface IQAC {
    iqac_category_title: string;
    iqac_title: string;
    iqac_pdf: string;
}

export interface IQACPOE {
    poe_title: string;
}

export interface LifeAtNLDAchievements {
    achievement_caption: string;
    achievement_description: string;
    achievement_image: string;
}

export interface LifeAtNLDStudentClubs {
    student_club_title: string;
    student_club_caption: string;
    student_club_description: string;
    student_club_social_media: string;
    student_club_image: string;
}

export interface LifeAtNLDGallery {
    gallery_caption: string;
    gallery_image: string;
}

export interface LifeAtNLDInsideNLD {
    inside_nld_tab_title: string;
    inside_nld_caption: string;
    inside_nld_description: string;
    inside_nld_image: string;
}

export interface MDPPrograms {
    program_name: string;
    program_description: string;
    program_application_link: string;
    program_pdf: string;
}

export interface Testimonials {
    testimonial_name: string;
    testimonial_bio: string;
    testimonial_designation: string;
    testimonial_company_name: string;
    testimonial_description: string;
    testimonial_youtube_id: string;
    testimonial_thumbnail: string;
    testimonial_youtube_video_id: string;
}

export interface PlacementCorporateEngagement {
    corporate_engagement_caption: string;
    corporate_engagement_description: string;
    corporate_engagement_icon: string;
}

export interface PlacementsTabs {
    tab_title: string;
    tab_content_caption: string;
    tab_content_description: string;
}

export interface PlacementRecruiters {
    recruiter_caption: string;
    recruiter_logo: string;
}

export interface PlacementFeatures {
    feature_category_title: string;
    feature_caption: string;
    feature_image: string;
}

export interface Contacts {
    contact_name: string;
    contact_designation: string;
    contact_phone_number: string;
    contact_email_address: string;
}

export interface Reports {
    report_title: string;
    report_pdf_file: string;
}

export interface ProgramsBlocks {
    program_block_title: string;
    program_block_caption: string;
    program_block_description: string;
    program_block_image: string;
    program_block_application_link: string;
}

export interface ProgramListing {
    program_name: string;
    program_url_slug: string;
    program_tagline: string;
    program_career_paths: string[];
    program_description: string;
    program_highlights: string[];
    program_thumbnail: string;
}

type ProgramSlider = {
    program_slider_caption: string;
    program_slider_image: string;
}

type ProgramInternationalPartner = {
    program_international_partner_name: string;
    program_international_partner_country: string;
    program_international_partner_description: string;
    program_international_partner_logo: string;
}

type ProgramOutcome = {
    program_outcome_caption: string;
    program_outcome_description: string;
}

type ProgramAdvantage = {
    program_advantage_caption: string;
    program_advantage_description: string;
}

export interface ProgramAdmissionTab {
    program_admission_tab_content_caption: string;
    program_admission_tab_content_description: string;
}

export interface ProgramAdmission {
    program_admission_tab_title: string;
    program_admission_tabs: ProgramAdmissionTab[]
}

type ProgramTestimonial = {
    program_testimonial_name: string;
    program_testimonial_designation: string;
    program_testimonial_about: string;
    program_testimonial_content: string;
    program_testimonial_image: string;
}

export interface Program {
    program_name: string;
    program_introduction_caption: string;
    program_introduction_description: string;
    program_sliders: ProgramSlider[];
    program_highlights: string[];
    program_highlights_image: string;
    program_highlights_youtube_id: string;
    program_credit_title: string;
    program_credit_caption: string;
    program_credit_description: string;
    program_credit_content: string;
    program_international_partner_caption: string;
    program_international_partner_description: string;
    program_international_partners: ProgramInternationalPartner[];
    program_outcomes: ProgramOutcome[]
    program_advantage_image: string;
    program_advantages: ProgramAdvantage[]
    program_application_title: string;
    program_application_caption: string;
    program_application_description: string;
    program_admissions: ProgramAdmission[]
    program_second_slider_caption: string;
    program_second_slider_description: string;
    program_second_sliders: ProgramSlider[]
    program_testimonial_title: string;
    program_testimonial_caption: string;
    program_testimonial_description: string;
    program_testimonials: ProgramTestimonial[];
    program_footer_section_image: string;
    program_footer_section_caption: string;
    program_footer_section_description: string;
    program_application_link: string;
    program_eligibility_and_fees: string;
    og_image: string;
    banner_image: string;
    banner_image_caption: string;
    banner_image_description: string;
    meta_title: string;
    meta_description: string;
    canonical_tag: string;
}

export interface NLDESObjectives {
    objective_caption: string;
    objective_description: string;
}

export interface Institutes {
    institute_caption: string;
    institute_description: string;
    institute_link: string;
    institute_thumbnail: string;
}

export interface NLDESManagement {
    management_category_title: string;
    management_name: string;
    management_designation: string;
    management_link: string;
    management_image: string;
}

export interface NLDESSocialResponsibility {
    social_responsibility_caption: string;
    social_responsibility_description: string;
    social_responsibility_image: string;
}

export interface NLDESCareers {
    career_caption: string;
    career_description: string;
    career_link: string;
    career_thumbnail: string;
}