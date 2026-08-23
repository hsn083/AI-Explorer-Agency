# AI EXPLORER AGENCY

A premium, modern agency website specializing in AI-powered solutions, web development, and digital transformation. Built with a sophisticated dark theme featuring elegant gold accents.

## 🌟 Features

- **Responsive Design**: Fully responsive across all devices (desktop, tablet, mobile)
- **Premium UI/UX**: Dark theme with gold accents, smooth animations, and modern typography
- **Team Profiles**: Detailed individual profile pages for each team member
- **Contact Form**: Functional project inquiry form with FormSubmit integration
- **Smooth Scrolling**: Enhanced navigation with smooth scroll behavior
- **Image Fallbacks**: Graceful handling of missing team member photos
- **Mobile Navigation**: Hamburger menu for mobile devices
- **SEO Optimized**: Semantic HTML structure and meta tags

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling with CSS Grid and Flexbox
- **Vanilla JavaScript**: No frameworks, pure JavaScript for interactivity
- **Google Fonts**: Cinzel, Jost, and Manrope typography
- **FormSubmit**: Form backend for email submissions

## 📁 Project Structure

```
AI Explorer Agency/
├── index.html              # Main landing page
├── style.css               # Complete stylesheet
├── readme.md               # Project documentation
├── assets/
│   └── logo.png            # Agency logo
├── profiles/               # Team member profile pages
│   ├── Chidi Okonkwo.html  # Content Strategist profile
│   ├── ayesha.html         # Marketing & SEO Specialist profile
│   ├── hassan.html         # Full Stack Developer profile
│   ├── michael.html        # Project Manager profile
│   ├── ubaid.html          # CEO & AI Engineer profile
│   └── zafar.html          # UI/UX Designer profile
└── members/                # Team member photos
    ├── Chidi Okonkwo.png
    ├── ayesha.png
    ├── hassan.png
    ├── michael.png
    ├── ubaid.png
    └── zafar.png
```

## 🚀 Setup Instructions

### Local Development

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd "AI Explorer Agency"
   ```

2. **Open the project**
   - Simply open `index.html` in your web browser
   - Or use a local server: `python -m http.server` or `npx serve`

3. **No build process required**
   - Pure HTML/CSS/JavaScript - no compilation needed
   - Just open and run

## 📧 Contact Form Setup

The contact form uses **FormSubmit** for email delivery. To set it up:

### Initial Setup

1. **FormSubmit Token**: The form currently uses a FormSubmit token for local development
   - Action URL: `https://formsubmit.co/ac8de5ca45edccbec64350a6d835d3b4`

2. **Email Verification**: 
   - First submission requires email verification at `aiexplorerinfo01@gmail.com`
   - Check your Gmail inbox (including spam folder) for FormSubmit verification email
   - Click the verification link to activate email delivery

### For Production Deployment

When deploying to a live domain, update the form in `index.html`:

```html
<form
    class="contact-form"
    action="https://formsubmit.co/aiexplorerinfo01@gmail.com"
    method="POST"
    enctype="multipart/form-data"
>
    <input type="hidden" name="_subject" value="New Project Inquiry - AI Explorer Agency">
    <input type="hidden" name="_next" value="https://yourdomain.com/thank-you.html">
    <input type="hidden" name="_captcha" value="false">
```

**Important**: Replace `https://yourdomain.com/thank-you.html` with your actual deployed domain URL.

### Contact Information

- **Email**: aiexplorerinfo01@gmail.com
- **Phone**: +92 329 7906077
- **Location**: Global (Remote team)

## 👥 Team Members

### Leadership
- **Ubaid** - CEO & AI Engineer (Pakistan)
  - Expertise: AI Development, Machine Learning, Business Strategy

### Development Team
- **Hassan** - Full Stack Developer (Pakistan)
  - Expertise: Frontend, Backend, System Architecture

- **Zafar** - UI/UX Designer (Pakistan)
  - Expertise: User Interface, User Experience, Design Systems

### Marketing & Content
- **Ayesha Khan** - Marketing & SEO Specialist (Pakistan)
  - Expertise: SEO, Digital Marketing, Growth Strategy

- **Chidi Okonkwo** - Content Strategist (Nigeria)
  - Expertise: Content Strategy, Brand Messaging, Storytelling

### Project Management
- **Michael Thompson** - Project Manager (United States)
  - Expertise: Project Planning, Team Coordination, Quality Control

## 🎨 Design System

### Colors
- **Background**: #08090b (Dark)
- **Gold Accent**: #d9b45f (Primary)
- **Text**: #e9e7e2 (Light)
- **Border**: rgba(255, 255, 255, 0.09)

### Typography
- **Headings**: Cinzel (Serif)
- **Body**: Manrope (Sans-serif)
- **Accent**: Jost (Sans-serif)

### Responsive Breakpoints
- Desktop: > 800px
- Tablet: 650px - 800px
- Mobile: < 650px
- Small Mobile: < 430px

## 📱 Mobile Optimization

- **Expertise Grid**: 2 columns per row on mobile (optimized from 1)
- **Team Grid**: 1 column on mobile
- **Services Grid**: 1 column on mobile
- **Navigation**: Hamburger menu on mobile devices
- **Touch-friendly**: Optimized button sizes and spacing

## 🔧 Customization

### Updating Team Information

1. **Main Page**: Edit team cards in `index.html` (lines ~800-1000)
2. **Profile Pages**: Edit individual files in `profiles/` directory
3. **Photos**: Replace images in `assets/members/` directory

### Updating Contact Information

Edit in `index.html` (lines ~1036-1067):
```html
<a href="mailto:aiexplorerinfo01@gmail.com" class="contact-item">
    <!-- Email -->
</a>
<a href="tel:+923297906077" class="contact-item">
    <!-- Phone -->
</a>
```

### Updating Services

Edit service cards in `index.html` (lines ~500-650)

## 🌐 Deployment

### Recommended Platforms

1. **Netlify**: Drag and drop deployment
2. **Vercel**: Git integration
3. **GitHub Pages**: Free hosting
4. **Traditional Hosting**: Upload via FTP

### Deployment Steps

1. **Update FormSubmit URL**: Replace local token with email address
2. **Update _next URL**: Set your live domain for thank-you page
3. **Upload Files**: Upload all files to your hosting
4. **Test Form**: Submit a test inquiry to verify email delivery
5. **Verify Email**: Complete FormSubmit email verification

## 🔒 Security Notes

- FormSubmit includes built-in spam protection
- No API keys or secrets exposed in frontend code
- HTTPS recommended for production
- Regular security updates recommended for hosting

## 📄 License

© 2026 AI Explorer Agency. All rights reserved.

## 🤝 Support

For project inquiries or support:
- Email: aiexplorerinfo01@gmail.com
- Phone: +92 329 7906077

---

**Built with ❤️ by AI Explorer Agency**
