# Render Deployment Guide for Blogger Frontend

## Files Created/Modified

1. **`.nvmrc`** - Specifies Node.js version 18.17.0
2. **`package.json`** - Added engines field for Node.js and npm versions
3. **`render.yaml`** - Render configuration file (optional)

## Render Dashboard Settings

### Manual Configuration (if not using render.yaml)

1. **Service Type**: Static Site
2. **Build Command**: `npm ci && npm run build`
3. **Publish Directory**: `build`

### Environment Variables to Set in Render Dashboard

Add these environment variables in your Render service settings:

- **NODE_VERSION**: `18.17.0`
- **NPM_VERSION**: `9.6.7`

### Additional Environment Variables (if needed)

If your app uses environment variables, add them in Render:

- **REACT_APP_API_URL**: Your backend API URL
- **REACT_APP_BASE_URL**: Your frontend base URL

## Deployment Steps

1. **Push your changes** to your Git repository
2. **Connect your repository** to Render
3. **Configure the build settings** as mentioned above
4. **Add environment variables** in Render dashboard
5. **Deploy** your application

## Troubleshooting

### If build still fails:

1. **Try alternative build command**: `npm install --production=false && npm run build`
2. **Clear build cache** in Render dashboard
3. **Check Node.js version** is set correctly
4. **Verify all dependencies** are in package.json

### Common Issues:

- **react-scripts not found**: Fixed by Node.js version specification
- **Build timeout**: Use `npm ci` instead of `npm install`
- **Memory issues**: Render free tier has memory limits

## Client-Side Routing

Your `_redirects` file should handle client-side routing:

```
/*    /index.html   200
```

## Notes

- The `.nvmrc` file ensures consistent Node.js version
- The `engines` field in package.json provides additional version specification
- The `render.yaml` file can automate the configuration (optional)
