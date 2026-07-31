import os

root_dir = r"c:\Users\LENOVO\OneDrive\Desktop\projects\Event Hub"

exclude_dirs = {'node_modules', 'dist', '.git', '__pycache__'}
exclude_files = {'db.sqlite3', 'package-lock.json', 'rename.py', 'tagline.py'}

for dirpath, dirnames, filenames in os.walk(root_dir):
    dirnames[:] = [d for d in dirnames if d not in exclude_dirs]
    
    for filename in filenames:
        if filename in exclude_files or filename.endswith('.png') or filename.endswith('.pyc'):
            continue
            
        filepath = os.path.join(dirpath, filename)
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                content = f.read()
                
            new_content = content.replace('Build Together. Launch Bigger.', 'Build Together. Grow Together.')
            
            if new_content != content:
                with open(filepath, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                print(f"Updated Tagline: {filepath}")
        except Exception as e:
            print(f"Skipped {filepath}: {e}")
